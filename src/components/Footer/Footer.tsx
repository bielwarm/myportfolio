import React from 'react';

export default function Footer() {

    const footerStyle: React.CSSProperties = {
        backgroundColor: '#16161f',
        padding: '20px 0 30px',
        color: 'white',
        textAlign: 'center' as const,
        fontSize: '1rem',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row'
    };

    const linkStyle: React.CSSProperties = {
        color: '#00BFFF',
        textDecoration: 'none',
        marginLeft: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px'
    };

    const hoverLinkStyle: React.CSSProperties = {
        color: '#009ACD',
    };


    return (
        <div style={footerStyle}><a
                href="www.linkedin.com/in/gabriel-warmling-19197b217"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = hoverLinkStyle.color as string}
                onMouseLeave={(e) => e.currentTarget.style.color = linkStyle.color as string}
            >
                Linked <img style={{marginLeft: 1}} alt="" width='30px' src="/LinkedIn_icon.svg" />
            </a>
        </div>
    )
}