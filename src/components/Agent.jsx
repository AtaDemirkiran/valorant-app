import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import './forAgents.css'
import '../App.scss'

const Agent = ({ agent }) => {
    // const [visible, setVisible] = useState(false)
    return (
        // <div className="container my-5 h-100" >
        <div className="col-md-4 mt-5">
            <div className="card profile-card-1">
                <img src={agent.fullPortraitV2} alt="profile-sample1" className="background " />
                <img src={agent.displayIcon} className="profile" alt="profile" />
                <div className="card-content">
                    <h2 className='font-weight-bold mt-1'> {agent.displayName} </h2>

                    <Link to={`/agents/${agent.uuid}`}> <button type='button' className='btn btn-dark' >Show Detail </button> </Link>
                    {/* {
                        visible ?
                            <div className='container mt-3 agent-description'>
                                {agent.description}
                            </div>
                            : null
                    } */}

                </div>
            </div>
            {/* <p className="mt-3 w-100 float-left text-center"><strong>Basic Profile Card</strong></p> */}
        </div>
        // </div>
    )
}

export default Agent