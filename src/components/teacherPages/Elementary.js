import React from 'react'
import {Link} from 'react-router-dom'

function Elementary() {
    return (
        <>
        <div>Elementary</div>
        <Link to='/home'>Home</Link>
        <Link to='/teacher'>Teacher</Link>
        </>
    )
}

export default Elementary;
