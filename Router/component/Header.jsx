import React from 'react'
import {Link }from "react-router-dom"


const Header = () => {
    return (
        <div style={{ height: '100px', width: '100%', display: 'flex', backgroundColor: 'pink' }}>
            <div style={{ height: '100px', width: '50%',display: 'flex', justifyContent: 'space-evenly',fontSize:'30px' }}><h3>Bloom</h3>
            </div>
            <div style={{ height: '100px', width: '50%', textAlign: 'center', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <div ><Link to="/">Home</Link></div>
                <div > <Link to ="/About">About</Link></div>
                <div><Link to="/Contact">Contact</Link></div>
            </div>
        </div>
    )
}

export default Header;