import React from 'react';

function Dropdown({ options }: { options: string[] }): JSX.Element {
    const optionsList = options.map((option: string): JSX.Element => {
        return <option value={option.toLowerCase()}>{option}</option>
    })

    return (
        <div className="dropdown">
            <select>{optionsList}</select>
        </div>
    )
}

export default Dropdown;