import React from 'react';
import './FilterCard.css';
import Input from './Input';

function FilterCard({ title, children}: { title: string; children: JSX.Element}): JSX.Element {
    return (
        <div className="filterCard">
            <div className="filterCard_checkbox">
                <Input type="checkbox" placeholder=""/>
            </div>
            <p className="filterCard_title">{title}</p>
            {children}
        </div>
    )
}

export default FilterCard;
