// react
import React, { useState } from 'react';
import axios from 'axios';
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
        setSongs([]);
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