// react
import React, { useState } from 'react';
import axios from 'axios';
// interface
import { Song, SongFromITunes } from '../types/index'
// styles
import styles from '../styles/Tunes.module.scss';
// components
import TunesSearch from "../components/TunesSearch";
import TunesList from "../components/TunesList";

type Props = {}

const Tunes = (props: Props) => {
    // state
    const [songs, setSongs] = useState([])

    // callback form submit
    const handleSearchSubmit = (data: string) => {
        axios.get(
            `https://itunes.apple.com/search?term=${encodeURI(data)}&entity=musicTrack&limit=5` 
        ).then(response => {
            const iTunesSongs = response.data.results
                .filter( (song: SongFromITunes) => song.kind === 'song' )
                .map( (song: SongFromITunes) => extractData(song) )
            setSongs(iTunesSongs);
        })
    }

    // formats song data
    const extractData = ({ trackID: id, trackName: title, artistName: artist, previewUrl: audioFile, artWorkUrl100: artWork, collectionName: album }: SongFromITunes) => {
        return { id, title, artist, audioFile, artWork, album } as Song
    }

    // template
    return (
        <>
        <h1>tunes</h1>
        <TunesSearch 
            onSearchSubmit={handleSearchSubmit} 
        />
        <TunesList songs={ songs }/>
        </>
    )
}

export default Tunes