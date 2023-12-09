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
    const [songs, setSongs] = useState([])

    // callback form submit
    const handleSearchFormSubmit = (data: string) => {
        setSongs([]);
    }

    // template
    return (
        <>
        <h1>tunes</h1>
        <TunesSearch 
            onSearchFormSubmit={handleSearchFormSubmit} 
        />
        <TunesList songs={ songs }/>
        </>
    )
}

export default Tunes