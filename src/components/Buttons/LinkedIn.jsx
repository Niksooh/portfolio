import React from 'react';

function ButtonLinkedIn({ linkedin, label }) {
    return (
        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            {label}
        </a>
    );
}

export default ButtonLinkedIn;
