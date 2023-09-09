import React from 'react';

export default function HeaderLink({ link, content, selected }: {link: string, content: string, selected: string}) {

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
