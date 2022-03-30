import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AgentDetail = () => {
    let { uuid } = useParams()

    const [agent, setAgent] = useState([])
    const fetchAgent = async () => {
        const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}`)
        setAgent(response.data.data)
    }
    useEffect(() => {
        fetchAgent()
    }, [])
    return (
        <div className="container mt-5">

            <section className="dark-grey-text agent-detail">
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