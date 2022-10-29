import { useEffect, useState } from "react"
import HeaderLink from "./HeaderLink"

export default function HeaderLinksBox({ windowScroll, windowHeight }) {
    const [selected, setSelected] = useState(0)

    const boxStyle = {
        display: "flex",
        gap: "2rem",
    }

    useEffect(() => {
        windowScroll < windowHeight ?
            setSelected(0) : windowHeight > 1073 ?
                windowScroll < windowHeight * 2 ? setSelected(1) : setSelected(2)
                : windowScroll < windowHeight + 1073 ? setSelected(1) : setSelected(2);
    }, [windowScroll, windowHeight])

    useEffect(() => {
        console.log(selected)
    }, [selected])

    return (
        <div style={boxStyle}>
            <HeaderLink link="#about-me" content="About Me" selected={selected === 0 ? "#74f6ff" : "white"} />
            <HeaderLink link="#work" content="Work" selected={selected === 1 ? "#74f6ff" : "white"} />
            <HeaderLink link="#contact" content="Contact" selected={selected === 2 ? "#74f6ff" : "white"} />
        </div>
    )
}