import React from 'react';
import './Dropdown.css';

interface Props {
    onUpdate: any;
    name: string;
    options: string[]
}

function Dropdown({ onUpdate, name, options }: Props): JSX.Element {
    const optionsList = options.map((option: string, index: number): JSX.Element => {
        return <option key={index} value={option.toLowerCase()}>{option}</option>
    })

    const onOptionChange = (e: any): void => {
        onUpdate(e.target.name, e.target.value)
    }

    return (
        <div className="dropdown">
            <select name={name} onChange={(e) => {onOptionChange(e)}}>{optionsList}</select>
        </div>
    )
}

export default Dropdown;