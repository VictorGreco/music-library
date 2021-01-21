import React from 'react';
import './SearchResultDisplayer.css';

interface SongItem {
    wrapperType?: string;
    artistViewUrl?: string;
    contentAdvisoryRating?: string;
    kind?: string;
    artworkUrl100?: string;
    trackName?: string;
    artistName?: string;
    collectionName?: string;
    trackPrice?: number;
    releaseDate?: string;
    trackTimeMillis?: number | undefined;
    primaryGenreName?: string;
    previewUrl?: string;
    trackViewUrl?: string;
}

interface ArtistItem {
    wrapperType?: string;
    kind?: string;
    artistName?: string;
    artistLinkUrl?: string;
    primaryGenreName?: string;
}

interface AlbumItem {
    wrapperType?: string;
    kind?: string;
    artworkUrl100?: string;
    collectionName?: string;
    artistName?: string;
    collectionPrice?: number;
    trackCount?: number;
    releaseDate?: string;
    primaryGenreName?: string;
    collectionViewUrl?: string;
}

interface MusicVideoItem {
    wrapperType?: string;
    kind?: string;
    trackExplicitness?: string;
    artworkUrl100?: string;
    artistViewUrl?: string;
    trackName?: string;
    artistName?: string;
    trackPrice?: number;
    releaseDate?: string;
    primaryGenreName?: string;
    trackTimeMillis?: number | undefined;
    previewUrl?: string;
    trackViewUrl?: string;
}

function SearchResultDisplayer({ data, onClick}: any): JSX.Element {

    const songClickHandler = (e: any): void => {
        const title = e.target.parentElement.parentElement.children[1].textContent
        const media = e.target.parentElement.parentElement.children[3].getAttribute('src')
        const buyNow = e.target.parentElement.parentElement.children[4].children[0].getAttribute('href')
        onClick(title, media, buyNow)
    }

    const videoClickHandler = (e: any): void => {
        const title = e.target.parentElement.parentElement.children[1].textContent
        const media = e.target.parentElement.parentElement.children[5].children[0].getAttribute('src')
        const buyNow = e.target.parentElement.parentElement.children[4].children[0].getAttribute('href')
        onClick(title, media, buyNow)
    }


    const millisToMinutesAndSeconds = (millis: number | undefined): string =>
        !!millis ? `${Math.floor(millis / 60000)} min ${((millis % 60000) / 1000).toFixed(0)} sec` : '';

    const songItem = ({ artistViewUrl, contentAdvisoryRating, kind, artworkUrl100, trackName, artistName, collectionName, trackPrice, releaseDate, trackTimeMillis, primaryGenreName, previewUrl, trackViewUrl }: SongItem, index: number): JSX.Element => {
        return (
            <div className="card song" key={index}>
                <div>
                    <p>
                        <span>{kind?.toUpperCase()}</span> | <span>{contentAdvisoryRating || 'notExplicit'}</span>
                        <button className="addToFavoriteButton" onClick={songClickHandler} >&hearts;</button>
                    </p>
                    <h3>{trackName} - {collectionName}</h3>
                    <h4>By <a target="_blank" href={artistViewUrl}>{artistName}</a> · {releaseDate?.split('-')[0]} · {millisToMinutesAndSeconds(trackTimeMillis)} · {primaryGenreName}</h4>
                    <audio controls src={previewUrl}></audio>
                    <p>
                        <a className="button" target="_blank" href={trackViewUrl}> Buy now </a> for {trackPrice} €
                    </p>
                </div>
                <img src={artworkUrl100} width="125" height="125"></img>
            </div>
        );
    };

    const artistItem = ({ artistName, artistLinkUrl, primaryGenreName }: ArtistItem, index: number): JSX.Element => {
        return (
            <div className="card artist" key={index}>
                <div>
                    <h3>{artistName}</h3>
                    <p>{primaryGenreName}</p>
                    <p>Check artist on <a target="_blank" href={artistLinkUrl}> iTunes</a></p>
                </div>
            </div>
        );
    };

    const albumItem = ({ artworkUrl100, collectionName, artistName, collectionPrice, trackCount, releaseDate, primaryGenreName, collectionViewUrl }: AlbumItem, index: number): JSX.Element => {
        return (
            <div className="card album" key={index}>
                <div>
                    <h3>{collectionName}</h3>
                    <h4>By {artistName}</h4>
                    <p>{releaseDate?.split('-')[0]} · {trackCount} songs ·{primaryGenreName}</p>
                    <p>
                        Buy on <a target="_blank" href={collectionViewUrl}> iTunes</a> for {collectionPrice} €
                    </p>
                </div>
                <img src={artworkUrl100} width="125" height="125"></img>
            </div>
        );
    };

    const musicVideoItem = ({ kind, trackExplicitness, artistViewUrl, trackName, artistName, trackPrice, releaseDate, primaryGenreName, trackTimeMillis, previewUrl, trackViewUrl }: MusicVideoItem, index: number): JSX.Element => {
        return (
            <div className="card music-video" key={index}>
                <div>
                    <p>
                        <span>{kind?.toUpperCase()}</span> | <span>{trackExplicitness || 'notExplicit'}</span>
                        <button className="addToFavoriteButton" onClick={videoClickHandler} >&hearts;</button>
                    </p>
                    <h3>{trackName}</h3>
                    <h4>By <a target="_blank" href={artistViewUrl}>{artistName}</a></h4>
                    <p>{releaseDate?.split('-')[0]} · {millisToMinutesAndSeconds(trackTimeMillis)} · {primaryGenreName}</p>
                    <p>
                        Buy on <a target="_blank" href={trackViewUrl}> iTunes</a> for {trackPrice} €
                    </p>
                    <video width="350" height="240" controls>
                        <source src={previewUrl} type="video/mp4" />
                    </video>
                </div>
            </div>
        );
    };

    return (
        <div className="search-result-displayer">
            <p className="search_title">Search Results</p>
            {data && data?.map((item: SongItem | MusicVideoItem | ArtistItem | AlbumItem, index: number) => {
                switch (item.kind || item.wrapperType) {
                    case 'song':
                        return songItem(item, index);
                    case 'artist':
                        return artistItem(item, index);
                    case 'collection':
                        return albumItem(item, index);
                    case 'music-video':
                        return musicVideoItem(item, index);
                }
            })}
        </div>
    );
}

export default SearchResultDisplayer;
