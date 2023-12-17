import React, { useState } from 'react';
// styles
import '../styles/Home.scss';
import logo from '../assets/logo.svg';

type Props = {}

const Home = (props: Props) => {
    const [count, setCount] = useState(0);

    return (
        <div className='container home'>
            <img className={ count > 0 ? "logo": ""} src={logo} alt="react logo" onClick={() => {
                setCount (prev => prev + 1);
            }} />
            {count > 0 ? <p>You've clicked the logo {count} times</p> : <p>Click the logo!</p>}
            <a href="https://react.dev/">Learn react</a>
        </div>
     )
}

export default Home