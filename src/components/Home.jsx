import React from 'react'
// import './forHome.css'
import '../App.scss'
const Home = () => {
    return (
        <section className="view">

            <div className="row">

                <div className="col-md-12 col-lg-6">

                    <div className="d-flex flex-column justify-content-center align-items-center h-100 ">
                        <h1 className="heading mt-4">Discover Valorant</h1>
                        <h4 className="subheading font-weight-bold">World's most popular framework for building responsive, mobile-first websites and apps</h4>
                        <div className="mr-auto">
                            <button type="button" className="btn btn-lily btn-margin btn-rounded">Get started <i className="fa fa-caret-right"></i></button>
                        </div>
                    </div>

                </div>

                <div className="col-md-12 col-lg-6">

                    <div className="view">
                        <img src="https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/bustportrait.png" className="img-fluid" alt="smaple image" />
                        <div className="mask flex-center hm-gradient">
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Home