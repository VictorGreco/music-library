import React from 'react';
import Dropdown from './Dropdown';
import Input from './Input';
import './Search.css';

interface Props {
    callback: any
}

class Search extends React.Component<Props> {
    state = {
        category: 'song',
        search_term: ''
    }
    
    onSearchUpdate = (name: string, value: string ): void => {
        name === 'category' ? this.setState({category: value.toLowerCase()}) : this.setState({search_term: value.toLowerCase()})
    }

    componentDidUpdate() {
        this.props.callback(this.state)
    }

    render(): JSX.Element {
        return (
            <div className="search_container">
                <div className="search_container_title">
                    <h1>Music Library</h1>
                </div>
                <div className="search_container_fields">
                    <Dropdown onUpdate={this.onSearchUpdate} name="category" options={['Song', 'Artist', 'Album', 'Music Video']}/>
                    <Input name= "search_term" onUpdate={this.onSearchUpdate} type="text" placeholder="name..." />
                </div>
            </div>
        );
    }
}

export default Search;
