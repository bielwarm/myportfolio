import { useState, useRef, useEffect } from "react"
import Expandable from "./Common/Expandable.js"
import Typewriter from "./Common/Typewriter";

export default function AboutMe({ setHeight, windowWidth }) {
    const [open, setOpen] = useState(false);
    const [contentLength, setContentLength] = useState(0);
    const mainHeightRef = useRef(null);
    const expandableHeightRef = useRef(null);

    useEffect(() => {
        if (mainHeightRef.current) {
            const timeoutId = setTimeout(() => {
                setHeight(mainHeightRef.current.offsetHeight)
                // console.log(`AboutMe section ${mainHeightRef.current.offsetHeight}`)
            }, 510);

            return () => clearTimeout(timeoutId)
        }
    }, [mainHeightRef, open, setHeight])

    // useEffect(() => {
    //     if (expandableHeightRef.current) {
    //         const timeoutId = setTimeout(() => {
    //             expandableHeightRef.current.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'end',
    //             });
    //         }, 510);

    //         return () => clearTimeout(timeoutId)
    //     }
    // }, [open, expandableHeightRef])

    const textToType = [
        "Full name: Gabriel Warmling",
        "Age: 28 years old",
        "Residence: Rimini, Italy",
        " ",
        "Languages:",
        " \u2022 English - (fluent)",
        " \u2022 Portuguese - (fluent)",
        " \u2022 Hebrew - (fluent)",
        " \u2022 Italian - (intermediate)",
        " \u2022 Spanish - (intermediate)",
        " ",
        "Interests:",
        "Tech, Games, Books, Puzzles, Music."
    ]


    const nameStyle = {
        fontSize: "1.4rem",
        fontWeight: "bold",
    }
    const typeStyle = {
        textDecoration: "underline",
    }
    const bodyStyle = {
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "1.1rem",
        lineHeight: "1.7",
        padding: "1.5rem 0 1rem",
        maxWidth: '55%',
        minWidth: '300px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        alignItems: 'center',
        letterSpacing: '0.5px' // Improves readability
    }
    const codeStyle = {
        fontFamily: "'Courier New', monospace",
        backgroundColor: '#2b2b2b', // dark grey background
        borderRadius: '3px',
        padding: '2px 4px',
        color: '#f5f5f5' // light grey font color
    }
    const descStyle = {
        fontFamily: "'Courier New', monospace",
        textAlign: "left",
        paddingLeft: "1rem",
        width: "300px"
    }

    return (
        <div ref={mainHeightRef} style={{ padding: "12rem 0 6rem", fontFamily: "'Roboto', sans-serif" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Welcome To My Portfolio!</div>
            <div style={{ fontSize: "1.9rem", marginBottom: "0.4rem" }}>My name is <span style={nameStyle}>Gabriel Warmling</span></div>
            <div style={{ fontSize: "1.4rem" }}>and I'm a <span style={typeStyle}>full-stack developer</span>.</div>
            <div style={bodyStyle}>
                <div>
                    This website is not just a digital platform; it's a showcase of my skills, commitment, and passion for technology and coding.
                    My proficiency in <span style={codeStyle}>Python</span>, <span style={codeStyle}>JavaScript</span>, <span style={codeStyle}>Rust</span>, and <span style={codeStyle}>cloud technologies</span> are extensively applied throughout the diverse and robust software solutions featured here.
                    Each project demonstrates my hands-on experience and continual pursuit for excellence in development.
                </div>
                <div> For those of you interested in knowing a bit more about the person behind the code, feel free to delve deeper by clicking the button below. You'll uncover a bit of my personal world beyond the realms of development.</div>
            </div>
            <Expandable open={open} setOpen={setOpen} contentLength={contentLength}>
                <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }} ref={expandableHeightRef}>
                    <div>
                        <img alt="" width="180px" src="/profile-img.jpeg" style={{ borderRadius: "10px", boxShadow: "3px 3px 3px #060609 " }} />
                    </div>
                    <div style={descStyle}>
                        <Typewriter open={open} textToType={textToType} setContentLength={setContentLength} />
                    </div>
                </div>
            </Expandable>
        </div>
    )
}