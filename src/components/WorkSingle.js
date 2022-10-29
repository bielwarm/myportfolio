import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function WorkSingle({ left, imgSrc, title, paragraph, description, url, tags }) {
    const [transition, setTransition] = useState(false);
    const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0})
    const [clicked, setClicked] = useState(false);
    const [open, setOpen] = useState(false);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        if (clicked) {
            setOpen(true);
        } else {
            setTransition(false)
            const timeout = setTimeout(() => {
                setOpen(false)
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [clicked])

    useEffect(() => {
        open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    
        const timeout = setTimeout(() => {
            open ? setTransition(true) : setTransition(false);
        }, 10);
        return () => clearTimeout(timeout);
    }, [open]);

    const styleMainBox = {
        display: "flex",
        width: "680px",
        gap: "70px",
        margin: left ? "0 auto 0 15%" : "0 15% 0 auto",
    }

    const styleImageBox = {
        height: "210px",
        width: expand ? "280px" : "210px",
        transform: `translate(${expand ? "-35px" : 0})`,
        borderRadius: expand ? "2px" : "105px",
        transition: "width 0.5s, transform 0.5s, border-radius 0.5s",
        overflow: "hidden",
        boxSizing: "border-box",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        boxShadow: "5px 5px 3px #060609 "
    }

    const image = (
        <div
            onMouseOver={() => setExpand(true)}
            onMouseOut={() => setExpand(false)}
            onClick={(e) => { setClicked(true); setMouseLocation({ x: e.clientX, y: e.clientY }) }}
            style={styleImageBox}>
            <img height="210px" width="280px" style={{ transform: `translate(${expand ? 0 : "-35px"})`, transition: "transform 0.5s" }} src={imgSrc} />
            <div style={{ position: "absolute", width: "100%", fontSize: "1.3rem", textDecoration: "underline", color: "#e1e1e1" }}>
                Show More
            </div>
        </div>
    )

    const text = (
        <div style={{ width: "400px" }}>
            <h3>
                {title}
            </h3>
            <div style={{ textAlign: left ? "left" : "right" }}>
                {paragraph}
            </div>
        </div>
    )

    const openedBox = (
        <div style={{
            position: "fixed",
            top: "0px",
            left: "0px",
            backgroundColor: transition ? "#16161fcc" : "#16161f00",
            zIndex: "9",
            width: "100vw",
            height: "100vh",
            transition : "background-color 0.5s",
        }}>

            <div style={{
                width: transition ? "100vw" : "0",
                height: transition ? "100vh" : "0",
                position: "relative",
                top: transition ? "0" : mouseLocation.y,
                left: transition ? "0" : mouseLocation.x,
                transition: "width 1s, height 1s, top 1s, left 1s",
            }}>

                <Modal 
                transition={transition}
                setClicked={setClicked} 
                mouseLocation={mouseLocation} 
                imgSrc={imgSrc}
                title={title}
                description={description}
                url={url}
                tags={tags} 
                />
            </div>
        </div>
    )

    return (left ?
        <div style={styleMainBox}>
            <div style={{ width: "210px" }}>
                {image}
            </div>
            {text}
            {open && openedBox}
        </div>
        :
        <div style={styleMainBox}>
            {text}
            <div style={{ width: "210px" }}>
                {image}
            </div>
            {open && openedBox}
        </div>
    )
}