import React from 'react';
import './Dropdown.css';

interface Props {
    onUpdate: any;
    name: string;
    options: any
}

function Dropdown({ onUpdate, name, options }: Props): JSX.Element {
    if (name === 'country') {

        const countryList = options && options?.map((option: any): JSX.Element =>
            <option key={option.a2} value={option.a2}>{option.name}</option>);

        const onOptionChange = (e: any): void => {
            onUpdate(e.target.name, e.target.value)
        }

        return (
            <div className="dropdown">
                <select name={name} onChange={(e) => { onOptionChange(e) }}>{countryList}</select>
            </div>
        );

    }

    const optionsList = options.map((option: string, index: number): JSX.Element => {
        return <option key={index} value={option}>{option.replace(option[0], option[0].toUpperCase())}</option>
    })

    const onOptionChange = (e: any): void => {
        onUpdate(e.target.name, e.target.value)
    }

    return (
        <div className="dropdown">
            <select name={name} onChange={(e) => { onOptionChange(e) }}>{optionsList}</select>
        </div>
    )
}

export default Dropdown;