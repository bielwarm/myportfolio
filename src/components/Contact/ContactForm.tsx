import React, { useState } from 'react';
import Footer from '../Footer/Footer';

export default function ContactForm({ windowHeight }: { windowHeight: number }) {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const formStyle = {
        padding: '2rem',
        background: '#676767',
        borderRadius: '8px',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)'
    };

    const inputStyle = {
        width: '100%',
        padding: '0.5rem',
        marginBottom: '1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1rem',
        background: '#D1D1D1'
    };

    const buttonStyle = {
        background: '#689467',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '0.7rem 1rem',
        cursor: 'pointer',
        fontSize: '1rem'
    };

    const handleSendEmail = () => {
        window.location.href = `mailto:bielwarm@hotmail.com?subject=${subject}&body=${message}`;
    };


    return (
        <div id="contact" style={{ paddingTop: '6rem', height: windowHeight * 0.7, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <h2 style={{ margin: '0 0 40px', fontSize: '3rem' }}>Contact</h2>
            <div style={formStyle}>
                <input id="title" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" style={inputStyle} />
                <textarea id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...inputStyle, height: '80px' }} />
                <button style={buttonStyle} onClick={handleSendEmail}>Send Email</button>
            </div>
        <Footer />
        </div>
    )
}