import { useEffect, useState } from "react"
import Expandable from "./Expandable"
import Typewriter from "./Typewriter";

export default function AboutMe() {
    const [open, setOpen] = useState(false);

    const textToType = ["Full name: Gabriel Warmling", "Age: 27 years old", "Residence: Lisbon, Portugal"]


    const nameStyle = {
        fontSize: "1.4rem",
        fontWeight: "bold",
    }
    const typeStyle = {
        textDecoration: "underline",
    }
    const descStyle = {
        textAlign: "left",
        paddingLeft: "1rem",
        width: "250px"
    }

    return (
        <div>
            <div>
                <div style={{ fontSize: "2.5rem" }}>Welcome to my portfolio!</div>
            </div>
            <div>
                <div style={{ fontSize: "1.9rem" }}>My name is <span style={nameStyle}>Gabriel Warmling</span></div>
            </div>
            <div>
                <div style={{ fontSize: "1.4rem" }}>and I'm a <span style={typeStyle}>full stack developer</span>.</div>
            </div>
            <div style={{ fontSize: "1.1rem", padding: "3rem 0 2rem" }}>
                <div>I developed this website as well as some other projects and have been part of a few more.</div>
                <div>If you're interested about learning a little bit more about me you can expand this section by clicking on the button below.</div>
            </div>
            <Expandable open={open} setOpen={setOpen}>
                <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
                    <img width="150px" src="/profile-img.jpeg" style={{ borderRadius: "10px", boxShadow: "3px 3px 3px #060609 " }} />
                    <div style={descStyle}>
                        <Typewriter open={open} textToType={textToType} />
                    </div>
                </div>
            </Expandable>
        </div>
    )
}