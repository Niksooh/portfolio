import React from 'react';

function ButtonGithub({ github, label }) {
    return (
        <a href={github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            {label}
        </a>
    );
}

export default ButtonGithub;