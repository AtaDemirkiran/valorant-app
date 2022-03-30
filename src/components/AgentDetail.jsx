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
        <div>
            <div>
                {agent.displayName}
                <img src={agent.displayIcon} />
            </div>

        </div>
    )
}

export default AgentDetail