import React from 'react';
import './Dropdown.css';

interface DropdownProps {
    onUpdate: Function;
    name: string;
    options?: string[];
    countries?: any;
}

interface Country {
    a2: string;
    name: string;
}

function Dropdown({ onUpdate, name, options, countries }: DropdownProps): JSX.Element {
    if (name === 'country') {
        const countryList = countries && countries.map(({ a2, name }: Country, index: number): JSX.Element =>
            <option key={index} value={a2}>{name}</option>);

        return (
            <div className="dropdown">
                <select name={name} onChange={(e) => { onOptionChange(e) }}>{countryList}</select>
            </div>
        );
    };

    const optionsList = options && options.map((option: string, index: number): JSX.Element =>
        <option key={index} value={option}>{option}</option>);

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