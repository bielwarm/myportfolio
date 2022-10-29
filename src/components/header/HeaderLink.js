import { useState } from "react"

export default function HeaderLink({ link, content, selected }) {

    return (
        <a
            href={link}
            className="link"
            style={{ color: selected }}
        >
            {content}
        </a>
    )
}