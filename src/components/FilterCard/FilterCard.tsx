import React from 'react';
import './FilterCard.css';
import Input from '../Input/Input';

interface FilterCardProps {
    onUpdate: Function;
    title: string;
    children: JSX.Element
}

function FilterCard({ onUpdate, title, children }: FilterCardProps): JSX.Element {
    const onInputChange = (name: string, value: string): void => {
        onUpdate(name, value);
    };

    return (
        <div className="filterCard">
            <div className="filterCard_checkbox">
                <Input onUpdate={onInputChange} name={title} type="checkbox" />
            </div>
            <p className="filterCard_title">{title}</p>
            {children}
        </div>
    );
}

export default FilterCard;
