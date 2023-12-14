// react
import React, { useRef, ChangeEvent, FormEvent } from 'react'
import { debounce } from 'lodash-es'
// styles
import styles from '../styles/Tunes.module.scss';

type Props = {
    onSearchSubmit: (data: string) => void
}

const TunesSearch = (props: Props) => {
    // input ref
    const searchInput = useRef<HTMLInputElement>(null)

    // input change
    const handleInputChange = debounce ((e: ChangeEvent<HTMLInputElement>) => {
        searchMusic();
    }, 750)

    // form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchMusic();
    }

    // search music
    const searchMusic = () => {
        const searchString = searchInput.current?.value;
        searchString && props.onSearchSubmit (searchString);
    }

    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={searchInput} autoFocus onChange={handleInputChange} placeholder='search song...' />
            </form>
        </div>
    )
}

export default TunesSearch