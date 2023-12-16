// react
import React from 'react';
import { truncate } from 'lodash-es';
// interface
import { Song } from '../types/index';
// styles
import styles from '../styles/Tunes.module.scss';

type Props = {
    song: Song
}

const TunesSong = (props: Props) => {
    const { song } = props;

    // adjust song title
    const songify = (song: Song) => {
        let { title, artist } = song;
        title = truncate(title, { length: 50 });
        artist = truncate(artist, { length: 50 });
        return title + ' - ' + artist;
    }

    // template
    return (
        <article key={ song.id } className='tunes-song'>
            <div className='song-info'>
                <h2>{ songify(song) }</h2>
                <p>{ truncate(song.album, { length: 100 }) }</p>
            </div>

            <div className="player">
                { song.artwork && <img src={ song.artwork } alt="song art" /> }
                <audio controls src={ song.audioFile } />
            </div>
        </article>
    )
}

export default TunesSong