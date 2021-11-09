import React from 'react'
import {Link} from 'react-router-dom'

function Parent() {
    return (
        <>
        <h><Link to='/home'>Home</Link></h>
        <div>Parent</div>
        <Link to='/math'>Math</Link>
        <Link to='/science'>Science</Link>
        <Link to='/history'>History</Link>
        <Link to='/english'>English</Link>
        </>
    )
}

export default Parent;