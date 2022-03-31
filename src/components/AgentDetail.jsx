import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const AgentDetail = () => {
    let { uuid } = useParams()

    const [agent, setAgent] = useState([])
    const fetchAgent = async () => {
        const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}`)
        setAgent(response.data.data)
    }
    useEffect(() => {
        fetchAgent()
    }, [setAgent])
    return (
        <div className="container mt-5">

            <section className="dark-grey-text agent-detail">

                <Link to='/agents'>
                    <button type='button' className='btn back-button'><i className="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                </Link>

                <div className="row align-items-center">

                    <div className="col-lg-5">


                        <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                            <img className="img-fluid agent-img" src={agent.fullPortraitV2} alt=" " />
                            <a>
                                <div className="mask rgba-white-slight"></div>
                            </a>
                        </div>

                    </div>

                    <div className="col-lg-7 agent-about">
                        <h1 className="font-weight-bold mb-3 agent-baslik"><strong> {agent.displayName} </strong></h1>

                        <p className='agent-description'>{agent.description}</p>



                    </div>


                </div>


            </section>



        </div>
    )
}

export default AgentDetail