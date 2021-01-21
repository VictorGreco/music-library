import React from 'react';
import './FavoriteCollection.css';

interface Props {
    favorites: any
}
class FavoriteCollection extends React.Component<Props> {
    
    
    
    
    render(): JSX.Element {
        return (
            <div className="favorites">
                <p className="favorites_title">Favorites <span>&hearts;</span></p>
            </div>
        )
    }
}

export default FavoriteCollection;
