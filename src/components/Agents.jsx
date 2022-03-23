import axios from 'axios'
import React, { useEffect, useState } from 'react'


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
                    {/* tekrar başlayan kısım */}
                    {
                        agents.map(agent => {
                            return (
                                <div className="col-lg-4 col-md-12 mb-4 " key={agent.uuid}>
                                    <div className="card testimonial-card" style={{ backgroundImage: `url(${agent.background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                        <div className="avatar mx-auto mt-2 ">
                                            <img src={agent.displayIcon} className="rounded-circle" style={{ maxWidth: '65%' }} />
                                        </div>
                                        <div className="card-body bg-light">
                                            <h4 className="font-weight-bold mb-4">{agent.displayName}</h4>
                                            <hr />
                                            <p className="dark-grey-text mt-2">{agent.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Agents