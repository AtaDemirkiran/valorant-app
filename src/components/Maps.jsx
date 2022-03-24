import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Map from './Map'
// import './forMap.css'
const Maps = () => {
    const [maps, setMaps] = useState([])

    const fetchMaps = async () => {
        const response = await axios.get('https://valorant-api.com/v1/maps')
        setMaps(response.data.data)
    }
    useEffect(() => {
        fetchMaps()
    }, [])
    return (
        <div className="container mt-5">

            <section className="text-center">
                <h2 className="font-weight-bold mb-5 h2">MAPS</h2>
                <div className="row">
                    {
                        maps.map(map => {
                            return (
                                <Map key={map.uuid} map={map} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Maps