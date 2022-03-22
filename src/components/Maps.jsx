import axios from 'axios'
import React, { useEffect, useState } from 'react'
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

                    {/* burası tekrar edicek kısım */}

                    {
                        maps.map(map => {
                            return (
                                <div className="col-md-4 mb-4" key={map.uuid}>
                                    <div className="card">
                                        <div className="view overlay">
                                            <img src={map.splash} className="card-img-top" alt="" />
                                            <a>
                                                <div className="mask rgba-white-slight waves-effect waves-light"></div>
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-1 font-weight-bold h4">{map.displayName}</p>
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

export default Maps