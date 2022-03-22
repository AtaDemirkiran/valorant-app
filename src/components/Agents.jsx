import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Agents = () => {

    const [agents, setAgents] = useState([])

    return (
        <div class="container mt-5">



            <section class="text-center dark-grey-text">


                <h3 class="font-weight-bold mb-4 pb-2">Testimonials</h3>

                <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
                    eum porro a pariatur veniam.</p>


                <div class="row">


                    <div class="col-lg-4 col-md-12 mb-4">

                        <div class="card testimonial-card">

                            <div class="avatar mx-auto white mt-2">
                                <img src="https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png" class="rounded-circle" style={{ maxWidth: '65%' }} />
                            </div>
                            <div class="card-body">

                                <h4 class="font-weight-bold mb-4">John Doe</h4>
                                <hr />

                                <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Lorem ipsum dolor sit amet eos
                                    adipisci, consectetur adipisicing elit.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">

                        <div class="card testimonial-card">

                            <div class="card-up blue-gradient">
                            </div>

                            <div class="avatar mx-auto white">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle img-fluid" />
                            </div>
                            <div class="card-body">

                                <h4 class="font-weight-bold mb-4">Anna Aston</h4>
                                <hr />

                                <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Neque cupiditate assumenda in
                                    maiores repudiandae mollitia architecto.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">

                        <div class="card testimonial-card">

                            <div class="card-up indigo"></div>

                            <div class="avatar mx-auto white">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle img-fluid" />
                            </div>
                            <div class="card-body">

                                <h4 class="font-weight-bold mb-4">Maria Kate</h4>
                                <hr />

                                <p class="dark-grey-text mt-4"><i class="fas fa-quote-left pr-2"></i>Delectus impedit saepe officiis
                                    ab aliquam repellat rem unde ducimus.</p>
                            </div>
                        </div>

                    </div>

                </div>


            </section>



        </div>
    )
}

export default Agents