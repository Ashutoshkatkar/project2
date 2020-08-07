import React from 'react'
import {NavLink} from 'react-router-dom';
const Menu=()=>{
    return(
        <>
        <div className="c2">
        <div className="c3">
        <NavLink exact activeClassName="c1" to="/">About</NavLink>
        <NavLink exact activeClassName="c1" to="/search">Search</NavLink>
        </div>
        </div>
        </>
    )
}

export default Menu;