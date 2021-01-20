import React from 'react';
import './Dropdown.css';

interface DropdownProps {
    onUpdate: Function;
    name: string;
    options: string[];
}

function Dropdown({ onUpdate, name, options }: DropdownProps): JSX.Element {
    const optionsList = options.map((option: string, index: number): JSX.Element =>
        <option key={index} value={option.toLowerCase()}>{option}</option>);

    const onOptionChange = ({ target }: any): void => {
        onUpdate(target.name, target.value);
    };

    return (
        <div className="dropdown">
            <select name={name} onChange={(e) => { onOptionChange(e) }}>{optionsList}</select>
        </div>
    );
}

export default Dropdown;