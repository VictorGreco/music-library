import React from 'react';
import Dropdown from './Dropdown';

class Search extends React.Component {
    render(): JSX.Element {
        return (
            <div className="search_container">
                <h1>Music Library</h1>
                <Dropdown options={['Song', 'Artist', 'Album', 'Music Video']}/>
            </div>
        );
    }
}

export default Search;
