import React, { useState } from 'react';
// styles
import styles from '../styles/Home.module.scss';
import logo from '../assets/tunes.png';

type Props = {}

const Home = (props: Props) => {
    const [count, setCount] = useState(0);

    return (
        <>
        <h1>Home</h1>
        <img src={logo} alt="logo" onClick={() => {
            setCount (prev => prev + 1);
        }} />
        <p>{count}</p>
        </>
     )
}

export default Home