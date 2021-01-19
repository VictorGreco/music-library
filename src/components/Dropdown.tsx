import React from 'react';
import './Dropdown.css';

function Dropdown({ options }: { options: string[] }): JSX.Element {
    const optionsList = options.map((option: string, index: number): JSX.Element => {
        return <option key={index} value={option.toLowerCase()}>{option}</option>
    })

    return (
        <div className="dropdown">
            <select>{optionsList}</select>
        </div>
    )
}

export default Dropdown;