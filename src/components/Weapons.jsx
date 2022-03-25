import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weapons = () => {

    const [weapons, setWeapons] = useState([])

    const fetchWeapon = async () => {

        const response = await axios.get('https://valorant-api.com/v1/weapons')
        setWeapons(response.data.data)
    }
    useEffect(() => {
        fetchWeapon()
    }, [])
    return (
        <div className="container my-5 h-100">
            <section className="p-md-3 mx-md-5 text-center text-lg-left">
                <h2 className="text-center mx-auto font-weight-bold mb-5 pb-2">WEAPONS</h2>
                <div className="row">
                    {/* tekrar eden kısım burdan başlıyor */}
                    {
                        weapons.map(weapon => {
                            return (
                                <div className="col-lg-3 col-md-6 mb-4 d-flex align-items-stretch" key={weapon.uuid}>
                                    <div className="card">
                                        <div className="white d-flex justify-content-center align-items-center card-img-top">
                                            <img
                                                src={weapon.displayIcon}
                                                className="img-fluid mt-4"
                                                alt='foto'
                                            />


                                        </div>
                                        <div className="card-body">
                                            <p className="font-weight-bold my-2"> {weapon.displayName} </p>
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
export default Weapons