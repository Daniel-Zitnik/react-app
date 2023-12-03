// react
import React, { useState } from 'react'
// interface
import { Song } from '../types/index'
// styles
import styles from '../styles/Tunes.module.scss';


type Props = {
    songs: Song[]
}

const TunesList = (props: Props) => {
    // props
    const { songs } = props;

    // template
    return (
        <ul>
            {songs.map( (song) => (
                <li key={song.id}>{ song.artist + ' - ' + song.name }</li>
            ))}
        </ul>
    )
}

export default TunesList