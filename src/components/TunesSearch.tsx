// react
import React, { useRef, ChangeEvent, FormEvent } from 'react'
// styles
import styles from '../styles/Tunes.module.scss';

type Props = {
    onSearchFormSubmit: (data: string) => void
}

const TunesSearch = (props: Props) => {
    // input ref
    const searchInput = useRef<HTMLInputElement>(null)

    // input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        searchMusic();
    }

    // form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchMusic();
    }

    // search music
    const searchMusic = () => {
        console.log(searchInput.current?.value);
    }

    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={searchInput} autoFocus onChange={handleInputChange}  />
            </form>
        </div>
    )
}

export default TunesSearch