import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import './Search.css';

interface SearchProps {
    callback: Function;
}

class Search extends React.Component<SearchProps> {
    state = {
        category: 'song',
        search_term: ''
    }

    onSearchUpdate = (name: string, value: string | boolean): void => {
        const lowerCaseValue: string | boolean = typeof value === 'string' && value.toLowerCase();
        const getState = name === 'category' ?
            { category: lowerCaseValue } :
            { search_term: lowerCaseValue };

        this.setState(getState);
    }

    componentDidUpdate() {
        this.props.callback(this.state);
    }

    render(): JSX.Element {
        return (
            <div className="search_container">
                <div className="search_container_title">
                    <h1>Music Library</h1>
                </div>
                <div className="search_container_fields">
                    <Dropdown onUpdate={this.onSearchUpdate} name="category" options={['Song', 'Artist', 'Album', 'Music Video']} />
                    <Input name="search_term" onUpdate={this.onSearchUpdate} type="text" placeholder="name..." />
                </div>
            </div>
        );
    }
}

export default Search;
