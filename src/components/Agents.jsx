import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Agent from './Agent'

const Agents = () => {

    const [agents, setAgents] = useState([])

    const fetchAgents = async () => {
        const response = await axios.get('https://valorant-api.com/v1/agents')
        setAgents(response.data.data)
    }
    useEffect(() => {
        fetchAgents()
    }, [])

    return (
        <div className="container mt-5">

            <section className="text-center dark-grey-text">

                <h3 className="font-weight-bold mb-4 h3 pb-2">AGENTS</h3>

                <div className="row">

                    {
                        agents.map(agent => {
                            return (
                                <Agent agent={agent} key={agent.uuid} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Agents