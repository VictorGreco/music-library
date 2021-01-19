import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';
import './Search.css';

class Search extends React.Component {
    
    onSearchUpdate = (name: string, value: string ): void => {
        console.log(name, value)
    }

    render(): JSX.Element {
        return (
            <div className="search_container">
                <div className="search_container_title">
                    <h1>Music Library</h1>
                </div>
                <div className="search_container_fields">
                    <Dropdown onUpdate={this.onSearchUpdate} name="category" options={['Song', 'Artist', 'Album', 'Music Video']}/>
                    <Input name= "search term" onUpdate={this.onSearchUpdate} type="text" placeholder="name..." />
                </div>
            </div>
        );
    }
}

export default Search;
