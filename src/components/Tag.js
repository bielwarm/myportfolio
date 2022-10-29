import { useEffect, useState } from "react"

export default function Tag({tagName, delay}) {
    const [transition, setTransition] = useState()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTransition(true);
        }, 10);
        return () => clearTimeout(timeout);
    }, [])

    return (
        <div style={{ display: "inline-block", position: "relative", left: transition ? "0" : 500, padding: "2px 3px", backgroundColor: "#2e585b", transition: `left 0.2s ${1 + delay*0.2}s` }}>
            {tagName}
        </div>
    )
}