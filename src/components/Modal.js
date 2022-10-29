import { useRef } from "react"
import useClickOutside from "../hooks/useClickOutside"
import Tag from "./Tag";
import Typewriter from "./Typewriter";

export default function Modal({ setClicked, imgSrc, title, description, url, tags, transition }) {

    const ref = useRef()

    useClickOutside(ref, () => setClicked(false))

    const textToType= url ? [
        `Title: ${title}`,
        `Description: ${description}`,
        url
    ] : [
        `Title: ${title}`,
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
            height: "90%",
        }}>
            <img
                height="100%"
                src={imgSrc}
                style={{
                    objectFit: "contain",
                    boxShadow: transition ? "7px 7px 5px #060609" : "0px 0px 5px #060609",
                    transition: "box-shadow 1s"
                }}
            />
            <div style={{ width: transition ? "18rem" : "0", height: transition ? "100%" : "0", transition: "width 1s, height 1s", backgroundColor: "#16161f", overflow: "hidden" }}>
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