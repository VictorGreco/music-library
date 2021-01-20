import React from 'react';
import './SearchResultDisplayer.css';

interface SongItem {
    artistViewUrl: string;
    contentAdvisoryRating: string;
    kind: string;
    artworkUrl100: string;
    trackName: string;
    artistName: string;
    collectionName: string;
    trackPrice: number;
    releaseDate: string;
    trackTimeMillis: number;
    primaryGenreName: string;
    previewUrl: string;
    trackViewUrl: string;
}

interface ArtistItem {
    artistName: string;
    artistLinkUrl: string;
    primaryGenreName: string;
}

interface AlbumItem {
    artworkUrl100: string;
    collectionName: string;
    artistName: string;
    collectionPrice: number;
    trackCount: number;
    releaseDate: string;
    primaryGenreName: string;
    collectionViewUrl: string;
}

interface MusicVideoItem {
    kind: string;
    trackExplicitness: string;
    artworkUrl100: string;
    artistViewUrl: string;
    trackName: string;
    artistName: string;
    trackPrice: number;
    releaseDate: string;
    primaryGenreName: string;
    trackTimeMillis: number;
    previewUrl: string;
    trackViewUrl: string;
}

function SearchResultDisplayer({ data }: any): JSX.Element {
    const millisToMinutesAndSeconds = (millis: number): string =>
        `${Math.floor(millis / 60000)} min ${((millis % 60000) / 1000).toFixed(0)} sec`;

    const songItem = ({ artistViewUrl, contentAdvisoryRating, kind, artworkUrl100, trackName, artistName, collectionName, trackPrice, releaseDate, trackTimeMillis, primaryGenreName, previewUrl, trackViewUrl }: SongItem, index: number): JSX.Element => {
        return (
            <div className="card song" key={index}>
                <div>
                    <p>
                        <span>{kind.toUpperCase()}</span> | <span>{contentAdvisoryRating}</span>
                    </p>
                    <h3>{trackName} - {collectionName}</h3>
                    <h4>By <a href={artistViewUrl}>{artistName}</a> · {releaseDate.split('-')[0]} · {millisToMinutesAndSeconds(trackTimeMillis)} · {primaryGenreName}</h4>
                    <audio controls src={previewUrl}></audio>

                    <p>
                        <a className="button" href={trackViewUrl}> Buy now </a> for {trackPrice} €
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
                    <p>Check artist on <a href={artistLinkUrl}> iTunes</a></p>
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
                    <p>{releaseDate.split('-')[0]} · {trackCount} songs ·{primaryGenreName}</p>
                    <p>
                        Buy on <a href={collectionViewUrl}> iTunes</a> for {collectionPrice} €
                    </p>
                </div>
                <img src={artworkUrl100} width="150" height="150"></img>
            </div>
        );
    };

    const musicVideoItem = ({ kind, trackExplicitness, artworkUrl100, artistViewUrl, trackName, artistName, trackPrice, releaseDate, primaryGenreName, trackTimeMillis, previewUrl, trackViewUrl }: MusicVideoItem, index: number): JSX.Element => {
        return (
            <div className="card music-video" key={index}>
                <div>
                    <p>
                        <span>{kind.toUpperCase()}</span> | <span>{trackExplicitness}</span>
                    </p>
                    <h3>{trackName}</h3>
                    <h4>By <a href={artistViewUrl}>{artistName}</a></h4>
                    <p>{releaseDate.split('-')[0]} · {millisToMinutesAndSeconds(trackTimeMillis)} · {primaryGenreName}</p>
                    <p>
                        Buy on <a href={trackViewUrl}> iTunes</a> for {trackPrice} €
                    </p>
                    <video width="350" height="240" controls>
                        <source src={previewUrl} type="video/mp4" />
                    </video>
                </div>
                <img src={artworkUrl100} width="150" height="150"></img>
            </div>
        );
    };

    return (
        <div className="search-result-displayer">
            {data && data?.map((item: any, index: number) => {
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
