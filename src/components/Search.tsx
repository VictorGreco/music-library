import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';

class Search extends React.Component {
    render(): JSX.Element {
        return (
            <div className="search_container">
                <h1>Music Library</h1>
                <Dropdown options={['Song', 'Artist', 'Album', 'Music Video']}/>
                <Input type="text" placeholder="name..." />
            </div>
        );
    }
}

export default Search;
