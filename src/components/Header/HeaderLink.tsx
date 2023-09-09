import React from 'react';

export default function HeaderLink({ link, content, selected }: {link: string, content: string, selected: string}) {

    const scrollToTarget = (target: string) => {
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div
            className="link"
            style={{ color: selected, cursor: 'pointer' }}
            onClick={() => scrollToTarget(link)}
        >
            {content}
        </div>
    )
}
