import React from 'react';
import './FavoriteCollection.css';

interface Props {
    favorites: any
}
class FavoriteCollection extends React.Component<Props> {
    
    generateFavoriteList() {
        if(this.props.favorites !== []) {
            const favoriteList = this.props.favorites.map((item: any, index: number) => {
                if(item['1'].includes('audio')) {
                    return (
                        <div className="card favoriteItem" key={index}>
                        <div>
                            <p className="favoriteItem_title">
                                <span>{item['0']}</span>
                                <button className="removeFromFavoriteButton" onClick={(e) => console.log('remove me', e)} >&#10008;</button>
                            </p>
                            <audio controls src={item['1']}></audio>
                            <p>Buy on <a target="_blank" href={item['2']}> iTunes</a></p>
                        </div>
                    </div>
                    )
                }
                return (
                    <div className="card favoriteItem" key={index}>
                    <div>
                        <p className="favoriteItem_title">
                            <span>{item['0']}</span>
                            <button className="removeFromFavoriteButton" onClick={(e) => console.log('remove me', e)} >&#10008;</button>
                        </p>
                        <video width="350" height="240" controls>
                            <source src={item['1']} type="video/mp4" />
                        </video>
                        <p>Buy on <a target="_blank" href={item['2']}> iTunes</a></p>
                    </div>
                </div>
                )
            })
            return favoriteList;
        }
    }
    

    
    render(): JSX.Element {
        return (
            <div className="favorites">
                <p className="favorites_title">Favorites <span>&hearts;</span></p>
                {this.generateFavoriteList()}
            </div>
        )
    }
}

export default FavoriteCollection;
