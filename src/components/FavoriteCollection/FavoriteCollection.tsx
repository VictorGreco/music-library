import React from 'react';
import './FavoriteCollection.css';

class FavoriteCollection extends React.Component {
    state = {
        favorites: [{}]
    }


    
    render(): JSX.Element {
        return (
            <div className="favorites">
                <p className="favorites_title">Favorites <span>&hearts;</span></p>
            </div>
        )
    }
}

export default FavoriteCollection;
