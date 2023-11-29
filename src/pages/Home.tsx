import React from 'react'
// styles
import styles from '../styles/Home.module.scss'
import logo from '../assets/tunes.png'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
        <h1>Home</h1>
        <img src={logo} alt="logo" />
        </>
     )
}

export default Home