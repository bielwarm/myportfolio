import { useEffect, useRef, useState } from "react"

export default function Expandable({elHeight, children, open, setOpen}) {
    const [height, setHeight] = useState(0)
    const checkHeightRef = useRef(null)

    useEffect(() => {
        setHeight(checkHeightRef.current.clientHeight)
      })

    // #13131b
    const expandedStyle = {
        overflow: "hidden",
        height: open ? elHeight ? elHeight : height : "0",
        transition: "height 0.5s ease-in",
        backgroundColor: "#13131b",
        // border: "1px solid #13131b",
        boxShadow: "3px 3px 5px #060609 inset",
    }

    return (
        <div>
            <div style={{ cursor: "pointer", paddingBottom: "0.5rem", fontSize: "1.6rem" }} onClick={() => setOpen(!open)}>
                Expand<img style={{position: "relative", left: "4px", top: "3px", color: "#FFFFFF", transform: open ? "scale(1.8) rotate(0.5turn) translate(0, -1px)" : "scale(1.8)"}} src="/down-arrow.svg" />
                </div>
            <div style={expandedStyle}>
                <div ref={checkHeightRef} style={{ padding: "0.5rem 0" }}>
                    {children}
                </div>
            </div>
        </div>
    )
}