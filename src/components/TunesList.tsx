// react
import React from 'react'
// interface
import { Song } from '../types/index'
// styles
import styles from '../styles/Tunes.module.scss';
// components
import TunesSong from './TunesSong';


type Props = {
    songs: Song[]
}

const TunesList = (props: Props) => {
    // props
    const { songs } = props;

    // template
    return (
        <section>
            {songs.map( (song) => (
                <TunesSong song={ song } />
            ))}
        </section>
    )
}

export default TunesList