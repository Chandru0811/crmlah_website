import React from 'react'
import Mobile from "../assests/mobile.png"
import Lead from "../assests/lead.png"
import home from "../assests/home.png"
import Crm from "../assests/crm.png"

function Home() {
  return (
    <section className='container-fluid '>
            <div className="row" style={{ backgroundColor: "#ECFAFE" }}>
                <div className='text-center'>
                    <h1 className='text-primary fw-bold' >CONVERSATIONAL</h1 >
                    <h1 className='text-danger fw-bold '>AI CRM</h1>
                    <h6 className='mt-3 '> Accelerate your Business Revenue with an AI-powered Chatbot CRM</h6>

                    <button class="btn btn-lg mt-5" style={{ backgroundColor: "#3D63EA" }}>
                        <span className='text-white'>View More</span>
                    </button>
                </div>
            </div>

            <div className='mt-5' style={{ backgroundColor: "#ECFAFE" }}>
                <div className="text-center  ">
                    <h1 className="fw-bold ">All of what your business needs <br />
                        in one space
                    </h1>
                </div>
                <img src={Mobile} className="img-fluid rounded mx-auto d-block p-5" />
            </div>

            <div className='row pt-5 pb-3'>
                <div className=' col-md-8 col-7 px-5'>
                    <div className=' shadow p-3 mb-5' style={{ backgroundColor: "#ECFAFE", }}>
                        <img src={Lead} className="img-fluid rounded mx-auto d-block p-2" />
                    </div>
                </div>

                <div className='col-md-4 col-5 px-5'>
                    <h1 className='fw-bold pt-5'>
                        Automate all of<br />
                        business operations
                    </h1>
                    <h5 className='text-muted pt-5 '>
                        Elevate your business with end-to-end
                        automation using ECS Cloud. Unleash the
                        power of seamless efficiency and
                        unparalleled control across all your
                        operations.
                    </h5>
                </div>
            </div>

            <div className='row pt-5 pb-3'>
                <div className=' col-md-8 col-7 px-5'>
                    <div className=' shadow p-3 mb-5' style={{ backgroundColor: "#ECFAFE", }}>
                        <img src={home} className="img-fluid rounded mx-auto d-block p-2" />
                    </div>
                </div>

                <div className='col-md-4 col-5 px-5'>
                    <h1 className='fw-bold pt-5'>
                        Enhance the efficiency<br />
                        of your business<br />
                        processes.
                    </h1>
                    <h5 className='text-muted pt-5 '>
                        Boost your team's productivity with ECS
                        CRM. Our advanced platform enables
                        seamless collaboration, workflow
                        streamlining, and overall efficiency
                        enhancement. Take your business to new
                        heights with the ultimate solution for team
                        performance.
                    </h5>
                </div>
            </div>

            <div className='shadow p-3 mb-5' style={{ backgroundColor: "#ECFAFE", }}>
                <h1 className='text-center  fw-bold pt-5'> Chatbot CRM
                </h1>
                <div className='row pt-5 pb-3'>
                    <div className='col-md-6 col-6'>
                        <img src={Crm} className="img-fluid rounded mx-auto d-block" />
                    </div>
                    <div className='col-md-6 col-6 justify-content-center pt-5 px-5'>
                        <p className=' text-muted text-center '> Supercharge your team’s productivity with ECS
                            Cloud. Our cutting-edge platform empowers your
                            staff to collaborate seamlessly, streamline
                            workflows, and enhance overall efficiency. Elevate
                            your business to new heights with the ultimate
                            team performance solution.</p>
                        <div className='d-flex justify-content-center pt-5'>
                            <button className='btn  btn-lg ' style={{ backgroundColor: "#3D63EA" }}>
                                <span className='text-white'>Book Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row pt-3 p'>
                <div className='text-center'>
                    <h1 className='fw-bold '>Key Features</h1>
                    <p className='text-muted'>
                        Experience Robust Automation and AI-Powered Insights with ECS Cloud, streamlining operations while<br />
                        gaining actionable data-driven insights for informed decision-making
                    </p>
                </div>
                <div className='col-md-4 col-4'>
                    <div className='card shadow p-3 mb-5 '>
                        <h5 className=' fw-bold p'>AI-Powered Chatbot</h5>
                        <p className=' text-muted '> Omni-channel chatbot:
                            Supports multiple platforms,
                            AI-trained for client interaction,
                            automation.</p>
                    </div>
                </div>
                <div className='col-md-4 col-4'>
                    <div className='card shadow p-3 mb-5 '>
                        <h5 className=' fw-bold '>CRM</h5>
                        <p className=' text-muted '>Organize contacts, track
                            communication, and manage
                            sales pipelines efficiently.</p>
                    </div>
                </div>
                <div className='col-md-4 col-4'>
                    <div className='card shadow p-3 mb-5 '>
                        <h5 className=' fw-bold '>Marketing Automation</h5>
                        <p className=' text-muted '> SMS and social media
                            marketing, landing pages,
                            analytics, reporting and much
                            more.</p>
                    </div>
                </div>
            </div>

            <div className='row pt-3'>
                <div className='col-md-4 col-4'>
                    <div className='card shadow p-3 mb-5 '>
                        <h5 className=' fw-bold p'>AI-Powered Chatbot</h5>
                        <p className=' text-muted '> Omni-channel chatbot:
                            Supports multiple platforms,
                            AI-trained for client interaction,
                            automation.</p>
                    </div>
                </div>
                <div className='col-md-4 col-4'>
                    <div className='card shadow p-3 mb-5 '>
                        <h5 className=' fw-bold '>CRM</h5>
                        <p className=' text-muted '>Organize contacts, track
                            communication, and manage
                            sales pipelines efficiently.</p>
                    </div>
                </div>
                <div className='col-md-4 col-4'>
                    <div className='card shadow p-3 mb-5 '>
                        <h5 className=' fw-bold '>Marketing Automation</h5>
                        <p className=' text-muted '> SMS and social media
                            marketing, landing pages,
                            analytics, reporting and much
                            more.</p>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default Home