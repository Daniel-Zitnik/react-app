// react
import React, { useState, ChangeEvent, FormEvent } from 'react'
// styles
import styles from '../styles/Tunes.module.scss';

type Props = {
    onSearchFormSubmit: (data: string) => void
    onInputChange: (data: string) => void
    searchQuery: string
}

const TunesSearch = (props: Props) => {
    // props
    const { searchQuery } = props

    // input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value);
    }

    // form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.onSearchFormSubmit(searchQuery);
    }

    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleInputChange} />
            </form>
        </div>
    )
}

export default TunesSearch