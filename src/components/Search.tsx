import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';
import './Search.css';

class Search extends React.Component {
    render(): JSX.Element {
        return (
            <div className="search_container">
                <div className="search_container_title">
                    <h1>Music Library</h1>
                </div>
                <div className="search_container_fields">
                    <Dropdown options={['Song', 'Artist', 'Album', 'Music Video']}/>
                    <Input type="text" placeholder="name..." />
                </div>
            </div>
        );
    }
}

export default Search;
