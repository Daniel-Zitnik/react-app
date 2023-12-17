import React, { useState } from 'react';
// styles
import '../styles/Home.scss';
import logo from '../assets/logo.svg';

type Props = {}

const Home = (props: Props) => {
    const [count, setCount] = useState(0);

    return (
        <div className='container home'>
            <h1>Home</h1>
            <img className="logo" src={logo} alt="react logo" onClick={() => {
                setCount (prev => prev + 1);
            }} />
            <p>{count}</p>
        </div>
     )
}

export default Home