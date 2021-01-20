import React from 'react';
import './Input.css';

interface InputProps {
    onUpdate: Function;
    type: string;
    name: string;
    placeholder?: string;
    min?: number;
    max?: number;
}

function Input({ onUpdate, type, name, placeholder, min, max }: InputProps): JSX.Element {

    const onInputChange = ({ target }: any): void => {
        if (type === 'checkbox') {
            return onUpdate(target.name, target.checked);
        }
        onUpdate(target.name, target.value);
    }

    return (
        <div className="input">
            <input name={name} 
                onChange={event => { onInputChange(event) }} 
                type={type} 
                placeholder={placeholder} 
                min={min} 
                max={max} />
        </div>
    );
}

export default Input;
