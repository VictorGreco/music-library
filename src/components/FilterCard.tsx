import React from 'react';

function FilterCard({ title, children}: { title: string; children: JSX.Element}): JSX.Element {
    return (
        <div className="filterCard">
            <p className="filterCard_title">{title}</p>
            {children}
        </div>
    )
}

export default FilterCard;
