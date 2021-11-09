import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <>
            <div>Home</div>
            <Link to='/Student'>Student</Link>
            <Link to='/Parent'>Parent</Link>
            <Link to='/Teacher'>Teacher</Link>
            <Link to='/about'>About</Link>
        </>
    )
}

export default Home;