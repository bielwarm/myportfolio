import { useEffect, useRef, useState } from "react"

export default function Expandable({ children, open, setOpen }) {
    const [height, setHeight] = useState(0)
    const [hover, setHover] = useState(false)
    const checkHeightRef = useRef(null)

    useEffect(() => {
        setHeight(checkHeightRef.current.clientHeight)
    }, [])

    // #13131b
    const expandedStyle = {
        overflow: "hidden",
        height: open ? height : "0",
        transition: "height 0.5s ease-in",
        backgroundColor: "#13131b",
        // border: "1px solid #13131b",
        boxShadow: "-5px 3px 5px #060609 inset",
    }

    return (
        <div>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    cursor: "pointer",
                    paddingBottom: "0.5rem",
                    fontSize: "1.6rem",
                    position: 'relative',
                    top: hover ? '1px' : '',
                    left: hover ? '1px' : '',
                    color: hover ? '#DADADA' : '#FFFFFF',
                    padding: '4px 10px',
                    margin: 'auto',
                    display: 'inline-block',
                }}
                onClick={() => setOpen(!open)}
            >
                Expand<img alt="" style={{ position: "relative", left: "4px", top: "3px", color: '#DADADA', transform: open ? "scale(1.8) rotate(0.5turn) translate(0, -1px)" : "scale(1.8)", filter: hover ? 'invert(20%)': '' }} src="/down-arrow.svg" />
            </div>
            <div style={expandedStyle}>
                <div ref={checkHeightRef} style={{ padding: "0.5rem 0" }}>
                    {children}
                </div>
            </div>
        </div>
    )
}