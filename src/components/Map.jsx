import React, { useEffect, useState } from 'react'

const Map = ({ map }) => {
    const [visible, setVisible] = useState(false)

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="view overlay">
                    <img src={map.splash} className="card-img-top" alt="" />
                    <a>
                        <div className="mask rgba-white-slight waves-effect waves-light"></div>
                    </a>
                </div>
                <div className="card-body">
                    <p className="mb-1 font-weight-bold h4">{map.displayName}</p>

                    <button type='button' className='btn btn-danger' onClick={() => setVisible(!visible)}>Click to see corordinates</button>
                    {
                        visible ? <p className='mt-2'> For {map.displayName} : {map.coordinates} </p> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Map