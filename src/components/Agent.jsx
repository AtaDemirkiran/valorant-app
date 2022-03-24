import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Agent = ({ agent }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="col-lg-4 col-md-12 mb-4 ">

            <div className="card testimonial-card" style={{ backgroundImage: `url(${agent.background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>


                <div className="avatar mx-auto mt-2 ">

                    {
                        agent.displayName === 'Chamber' ?
                            <img src={agent.displayIconSmall} className="rounded-circle" style={{ maxWidth: '40%' }} />
                            :
                            <img src={agent.displayIconSmall} className="rounded-circle" style={{ maxWidth: '55%' }} />
                    }
                </div>
                <div className="card-body bg-light">
                    <h4 className="font-weight-bold mb-4">{agent.displayName}</h4>
                    <hr />
                    <button type='button' className='btn btn-dark' onClick={() => setVisible(!visible)}>Show Detail</button>
                    {
                        visible ?
                            <p className="dark-grey-text mt-2">{agent.description}</p>
                            : null
                    }
                </div>
            </div>


        </div>
    )
}

export default Agent