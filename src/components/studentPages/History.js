import React from 'react'
import {Link} from 'react-router-dom'

function History() {
    return (
        <>
        <div>History</div>
        <Link to='/home'>Home</Link>
        <Link to='/student'>Student</Link>
        </>
    )
}

export default History;
