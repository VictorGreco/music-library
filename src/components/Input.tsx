import React from 'react';
import './Input.css';

function Input({ type, placeholder, min, max }: { type: string; placeholder: string; min?: number; max?: number }): JSX.Element {
    return (
        <div className="input">
            <input type={type} placeholder={placeholder} min={min} max={max} />
        </div>
    )
}

export default Input;
