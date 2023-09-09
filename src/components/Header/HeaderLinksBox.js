import { useEffect, useState } from "react"
import HeaderLink from "./HeaderLink"

export default function HeaderLinksBox({ windowScroll, aboutMeHeight, workHeight }) {
    const [selected, setSelected] = useState(0)

    const boxStyle = {
        display: "flex",
        gap: "2rem",
    }

    useEffect(() => {
        windowScroll < aboutMeHeight * 0.6 ? setSelected(0) :
                windowScroll < aboutMeHeight + workHeight * 0.6 ? setSelected(1) : setSelected(2);
    }, [windowScroll, aboutMeHeight, workHeight])

    return (
        <div style={boxStyle}>
            <HeaderLink link="#about-me" content="About Me" selected={selected === 0 ? "#74f6ff" : "white"} />
            <HeaderLink link="#work" content="Work" selected={selected === 1 ? "#74f6ff" : "white"} />
            <HeaderLink link="#contact" content="Contact" selected={selected === 2 ? "#74f6ff" : "white"} />
        </div>
    )
}