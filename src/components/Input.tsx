import React from 'react';
import './Input.css';

function Input({ type, placeholder }: { type: string; placeholder: string }): JSX.Element {
    return (
        <div className="input">
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

export default Input;
