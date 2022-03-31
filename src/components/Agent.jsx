import React from 'react'
import { Link } from 'react-router-dom'

const Agent = ({ agent }) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="card profile-card-1">
                <img src={agent.fullPortraitV2} alt="profile-sample1" className="background " />
                <img src={agent.displayIcon} className="profile" alt="profile" />
                <div className="card-content">
                    <h2 className='font-weight-bold mt-1 '> {agent.displayName} </h2>

                    <Link to={`/agents/${agent.uuid}`}> <button type='button' className='btn detail-button'>Show Detail </button> </Link>

                </div>
            </div>
        </div>
    )
}

export default Agent