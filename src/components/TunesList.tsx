// react
import React from 'react'
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
                <li key={song.id}>{ song.artist + ' - ' + song.title }</li>
            ))}
        </ul>
    )
}

export default TunesList