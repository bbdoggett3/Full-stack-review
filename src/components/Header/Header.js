import React from 'react'
import {Link} from 'react-router-dom';

const Header = props => {
    return (
        <nav>
            <h1>Header</h1>
            <div>
                <Link to='/dashboard'>Dashboard</Link> <br/>
                <Link to='/profile'>Profile</Link>
            </div>
        </nav>
    )
}

export default Header;