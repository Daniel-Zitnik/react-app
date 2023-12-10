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
        title = truncate(title, { length: 75 });
        return song.title + ' - ' + song.artist;
    }

    // template
    return (
        <article key={ song.id }>
            <div>
                <h2>{ songify(song) }</h2>
                <div className="player">
                    { song.artWork && <img src={ song.artWork } alt="song art" /> }
                    <audio controls src={ song.audioFile } />
                </div>
            </div>

            <footer>{ truncate(song.album, { length: 100 }) }</footer>
        </article>
    )
}

export default TunesSong