import { useEffect, useRef, useState } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import Typewriter from "./Typewriter";

export default function Modal({ setClicked, imgSrc, title, description, url, tags, transition, windowHeight, windowWidth }) {

    const ref = useRef()
    const heightRef = useRef(null)
    const [imgHeight, setImgHeight] = useState(null)

    useClickOutside(ref, () => setClicked(false))

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setImgHeight(entry.contentRect.height);
            }
        });
        if (heightRef.current) {
            observer.observe(heightRef.current);
        }
        return () => observer.disconnect();
    }, [])

    useEffect(() => {
        if (heightRef.current) {
            setImgHeight(heightRef.current.offsetHeight)
        }
        console.log(heightRef?.current?.offsetHeight)
    }, [heightRef, heightRef?.current?.offsetHeight, windowHeight, windowWidth])

    const textToType = url ? [
        `Title: ${title}`,
        " ",
        `Description: ${description}`,
        " ",
        url
    ] : [
        `Title: ${title}`,
        " ",
        `Description: ${description}`
    ]

    return (
        <div ref={ref} style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: "1.5rem",
            width: "80%",
            maxHeight: "80vm"
        }}>
            <img
                ref={heightRef}
                width="70%"
                src={imgSrc}
                style={{
                    maxHeight: "80vm",
                    margin: 'auto',
                    objectFit: "contain",
                    boxShadow: transition ? "7px 7px 5px #060609" : "0px 0px 5px #060609",
                    transition: "box-shadow 1s"
                }}
            />
            <div style={{ width: transition ? "30%" : "0", height: imgHeight , transition: "width 1s", backgroundColor: "#16161f", overflow: "hidden", margin: 'auto', maxHeight: imgHeight }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "1rem",
                    fontSize: transition ? "1rem" : "0",
                    transition: "font-size 1s"
                }}>
                    <Typewriter open={transition} textToType={textToType} work={true} tags={tags} />
                </div>
            </div>
        </div>
    )
} 