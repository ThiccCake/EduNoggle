import React from 'react'
import {Link} from 'react-router-dom'

function Math() {
    return (
        <>
        <div>Math</div>
        <Link to='/home'>Home</Link>
        <Link to='/student'>Student</Link>
        </>
    )
}

export default Math;