// react
import React, { useState } from 'react';
// styles
import styles from '../styles/Tunes.module.scss';
// components
import TunesSearch from "../components/TunesSearch";
import TunesList from "../components/TunesList";

type Props = {}

const Tunes = (props: Props) => {
    // state
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([
        {id: 1, artist: 'one', name: 'one song'},
        {id: 2, artist: 'two', name: 'two song'},
        {id: 3, artist: 'three', name: 'three song'}
    ])

    // callback input change
    const handleInputChange = (data: string) => {
        setSearchQuery(data);
    }

    // callback form submit
    const handleSearchFormSubmit = (data: string) => {
        const newSong = {
            id: Math.max (...songs.map (s => s.id)) + 1,
            artist: data,
            name: data + ' song'
        }

        setSongs([...songs, newSong]);
    }

    // template
    return (
        <>
        <h1>tunes</h1>
        <TunesSearch 
            onSearchFormSubmit={handleSearchFormSubmit} 
            onInputChange={handleInputChange} 
            searchQuery={searchQuery}
        />
        <TunesList songs={ songs }/>
        </>
    )
}

export default Tunes