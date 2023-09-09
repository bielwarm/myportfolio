import { useEffect, useRef, useState } from "react"
import useClickOutside from "../../hooks/useClickOutside"
import Typewriter from "./Typewriter";

export default function Modal({ setClicked, imgSrc, title, description, url, responsibilities, tags, transition, windowHeight, windowWidth }) {

    const ref = useRef()
    const heightRef = useRef(null)
    const bottomRef = useRef(null)
    const [imgHeight, setImgHeight] = useState(null)
    const [contentLength, setContentLength] = useState(null)
    const [skipTypewriter, setSkipTypewriter] = useState(false);

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
    }, [heightRef, heightRef?.current?.offsetHeight, windowHeight, windowWidth])

    useEffect(() => {
        if (contentLength > 0) {
            bottomRef.current?.scrollIntoView()
        }
    }, [contentLength])

    const textToType = url ? [
        `Title: ${title}`,
        " ",
        `Description: ${description}`,
        " ",
        url,
        " ",
        `Responsibilities: ${responsibilities}`
    ] : [
        `Title: ${title}`,
        " ",
        `Description: ${description}`,
        " ",
        `Responsibilities: ${responsibilities}`
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
                alt=""
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
            <div style={{ width: transition ? "30%" : "0", height: imgHeight, transition: "width 1s", backgroundColor: "#16161f", overflowY: "auto", overflowX: "hidden", margin: 'auto', maxHeight: imgHeight }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "1rem",
                    fontSize: transition ? "1rem" : "0",
                    transition: "font-size 1s"
                }}>
                    <Typewriter open={transition} textToType={textToType} work={true} tags={tags} url={url ? true : false} setContentLength={setContentLength} skipTypewriter={skipTypewriter} />
                </div>
                <div ref={bottomRef} />
            </div>
            <div style={{ position: 'absolute', bottom: -25, right: 5, textDecoration: "underline", cursor: 'pointer', fontSize: transition ? '1rem' : "0", transition: "font-size 1s" }} onClick={() => setSkipTypewriter(true)}>Skip</div>
        </div>
    )
} 