// react
import React, { useState } from 'react';
import axios from 'axios';
// interface
import { Song, SongFromITunes } from '../types/index';
// components
import TunesSearch from "../components/TunesSearch";
import TunesList from "../components/TunesList";
// styles
import '../styles/Tunes.scss';

type Props = {}

const Tunes = (props: Props) => {
    // state
    const [songs, setSongs] = useState([]);
    const [songsFinded, setSongsFinded] = useState(true);

    // callback form submit
    const handleSearchSubmit = (data: string) => {
        axios.get(
            `https://itunes.apple.com/search?term=${encodeURI(data)}&entity=musicTrack&limit=6` 
        ).then(response => {
            let iTunesSongs = response.data.results
                .filter( (song: SongFromITunes) => song.kind === 'song' )
                .map( (song: SongFromITunes) => extractData(song) )
            setSongs(iTunesSongs);
            setSongsFinded(iTunesSongs.length > 0 ? true : false);
        })
    }

    // formats song data
    const extractData = ({ trackId: id, trackName: title, artistName: artist, previewUrl: audioFile, artworkUrl100: artwork, collectionName: album }: SongFromITunes) => {
        return { id, title, artist, audioFile, artwork, album } as Song
    }

    // template
    return (
        <div className='container tunes'>
            <TunesSearch 
                onSearchSubmit={handleSearchSubmit} 
            />
            {songsFinded == true ? (songs.length > 0 && <h1>Results</h1>) : <h1>No songs were found</h1>}
            <TunesList songs={ songs }/>
        </div>
    )
}

export default Tunes