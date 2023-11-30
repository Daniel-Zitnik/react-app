// react
import React, { useState, ChangeEvent, FormEvent } from 'react';
// styles
import styles from '../styles/Tunes.module.scss';

type Props = {}

const Tunes = (props: Props) => {
    // state
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([
        {id: 1, artist: 'one', name: 'one song'},
        {id: 2, artist: 'two', name: 'two song'},
        {id: 3, artist: 'three', name: 'three song'}
    ])

    // input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery( e.target.value );
    }

    // form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newSong = {
            id: Math.max (...songs.map (s => s.id)) + 1,
            artist: searchQuery,
            name: searchQuery + ' song'
        }

        setSongs([...songs, newSong]);
    }

    // template
    return (
        <>
        <h1>tunes</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" value={searchQuery} onChange={handleInputChange} />
        </form>

        <ul>
            {songs.map( song => (
                <li key={song.id}>{ song.artist + ' - ' + song.name }</li>
            ))}
        </ul>
        </>
    )
}

export default Tunes