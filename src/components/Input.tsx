import React from 'react';
import './Input.css';

interface Props {
    onUpdate?: any;
    type: string;
    name: string;
    placeholder?: string;
    min?: number;
    max?: number
}

function Input({ onUpdate, type, name, placeholder, min, max }: Props ): JSX.Element {
    
    const onInputChange = (e: any): void => {
        if(type === 'checkbox') {
            return onUpdate(e.target.name, e.target.checked)
        }
        onUpdate(e.target.name, e.target.value)
    }

    return (
        <div className="input">
            <input name={name} onChange={(e) => {onInputChange(e)}} type={type} placeholder={placeholder} min={min} max={max} />
        </div>
    )
}

export default Input;
