import React from 'react'
import {Link} from 'react-router-dom'

function History() {
    return (
        <>
        <div>History</div>
        <Link to='/home'>Home</Link>
        <Link to='/parent'>Parent</Link>
        </>
    )
}

export default History;
