import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import './Search.css';

interface SearchProps {
    setState: Function;
}

function Search({ setState }: SearchProps): JSX.Element {
    const searchUpdate = (name: string, value: string | boolean): void => {
        const lowerCaseValue: string | boolean = typeof value === 'string' && value.toLowerCase();
        const getState = name === 'category' ?
            { category: lowerCaseValue } :
            { search_term: lowerCaseValue };

        setState(getState);
    };

    return (
        <div className="search_container">
            <div className="search_container_title">
                <h1>Music Library</h1>
            </div>
            <div className="search_container_fields">
                <Dropdown onUpdate={searchUpdate} name="category" options={['music', 'all', 'podcast', 'musicVideo']} />
                <Input name="search_term" onUpdate={searchUpdate} type="text" placeholder="name..." />
            </div>
        </div>
    );
}

export default Search;
