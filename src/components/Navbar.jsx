import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [color, setColor] = useState('#18142f')

    return (
        <nav className="navbar navbar-expand-lg white" style={{ backgroundColor: '#ff4a59' }}>

            <div className="container">

                <h4 className='h4 pt-2' style={{ color }}>VALORANT APP</h4>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation" style={{ backgroundColor: color }}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-5" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto font-weight-bold">
                        <li className="nav-item ml-3 mt-1">
                            <Link style={{ color }} to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item ml-3 mt-1">
                            <Link to={'/agents'} style={{ color }}>Agents</Link>
                        </li>
                        <li className="nav-item ml-3 mt-1">
                            <Link to='/weapons' style={{ color }}>Weapons</Link>
                        </li>
                        <li className='nav-item ml-3 mt-1'>
                            <Link to='/maps' style={{ color }}>Maps</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navbar