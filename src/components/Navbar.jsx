import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    // const [color, setColor] = useState('#18142f')

    return (
        <nav className="navbar navbar-expand-lg white">

            <div className="container">

                <Link to='/' className='navbarItem'>
                    <h4 className='h4 pt-2 '>VALORANT APP</h4>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ml-5" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto font-weight-bold">
                        <li className="nav-item ml-3 mt-1">
                            <Link className='navbarItem' to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item ml-3 mt-1">
                            <Link to={'/agents'} className='navbarItem'>Agents</Link>
                        </li>
                        <li className="nav-item ml-3 mt-1">
                            <Link to='/weapons' className='navbarItem'>Weapons</Link>
                        </li>
                        <li className='nav-item ml-3 mt-1'>
                            <Link to='/maps' className='navbarItem'>Maps</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navbar