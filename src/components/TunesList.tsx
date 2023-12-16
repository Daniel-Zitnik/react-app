// react
import React from 'react'
// interface
import { Song } from '../types/index'
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
        <section className='tunes-list'>
            {songs.map( (song) => (
                <TunesSong song={ song } key={ song.id } />
            ))}
        </section>
    )
}

export default TunesList