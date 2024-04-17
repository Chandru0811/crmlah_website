import React from 'react';
import aboutimage from "../assests/mission.png";
import aboutVision from "../assests/vision.png";
import aboutPrivacy from "../assests/privacy.png";
import aboutUs from "../assests/aboutUs.png";
import aboutAuthenticate from "../assests/authenticate.png";
function About() {
  return (
    <div className='container-fluid about' style={{backgroundColor:"#ECFAFE"}}>
      <div className='d-flex justify-content-center flex-column align-items-center'>
        <h2 className='mt-5 d-flex text-center display-2' style={{color:"rgba(0, 0, 0, 0.726)"}}>We help businesses automate,<br></br>
       integrate & streamline</h2>
      </div>
      
      <div className="row my-4 text-center">
      <h4 className='d-flex col-md-8 offset-md-2'>Unlock remarkable growth, automation, and customer engagement with ECS 
        Cloud’s comprehensive SaaS solution. Discover the potential of effortless
        integration and excellence all in one unified platform!</h4>
      <p></p>
      </div>

      <div className='container'>
      <div className='row mt-5 mb-5 d-flex'>
        <div className='col-md-6 col-12'>
            <img className="img-fluid" src={aboutimage} alt='mission'/>
        </div>
        <div className='col-md-6 col-12'>
            <h1 className='fw-bold text-center mt-2' style={{color:"rgba(0, 0, 0, 0.726)"}}>Our Mission</h1>
          <div className='row'>
            <div className='col-md-10 offset-md-1'>
            <h5 className='d-flex p-2 text-start ms-2'>At ECS Cloud, our mission is to empower businesses with 
            innovative CRM solutions that simplify operations, foster
             growth, and drive success. We’re committed to 
             delivering cutting-edge technology that streamlines 
             processes, enhances customer relationships, and fuels 
             productivity, enabling organizations of all sizes to thrive in
              an ever-evolving business landscape. Our dedication to
               excellence ensures that every client can harness the full
                power of ECS Cloud for lasting success.</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
     <div className='container'>
     <div className='row'>
        <div className='col-md-4 col-12 mt-5 mb-5'>
        <div className="card  p-3 shadow-lg rounded" style={{backgroundColor:"#E6EBFF"}}>
         <div className='d-flex'>
          <div>
         <img className="img-fluid pt-2" src={aboutVision} alt='vission'/>
         </div>
         <div>
         <div className=' text-center  display-4'>
                <h4>Integirity</h4>
            </div>
            <div>
                <p className='d-flex text-start ms-4 p-2'>Upholding honesty, ethics, 
                and transparency 
                in all our actions.
                 </p>
            </div>
         </div>
         </div>
        </div>
      </div>
      <div className='col-md-4 col-12 mt-5 mb-5'>
        <div className="card  p-3 shadow-lg rounded" style={{backgroundColor:"#E6EBFF"}}>
         <div className='d-flex'>
          <div>
         <img className="img-fluid pt-2" src={aboutPrivacy} alt='privacy'/>
         </div>
         <div>
         <div className=' text-center  display-4'>
                <h4>Privacy</h4>
            </div>
            <div>
                <p className='d-flex text-start ms-4 p-2'>Upholding honesty, ethics, 
                and transparency 
                in all our actions.
                 </p>
            </div>
         </div>
         </div>
        </div>
      </div>
      <div className='col-md-4 col-12 mt-5 mb-5'>
        <div className="card  p-3 shadow-lg rounded" style={{backgroundColor:"#E6EBFF"}}>
         <div className='d-flex'>
          <div>
         <img className="img-fluid pt-2" src={aboutAuthenticate} alt='authenticate'/>
         </div>
         <div>
            <div className=' text-center  display-4'>
                <h4>Aunthenticity</h4>
            </div>
            <div>
                <p className='d-flex text-start ms-4 p-2'>Upholding honesty, ethics, 
                and transparency 
                in all our actions.
                 </p>
            </div>
         </div>
         </div>
        </div>
      </div>
      </div>
     </div>
     <div className='container pb-5'>
      <div className='row mt-5 d-flex'>
    <div className='col-md-6 col-12'>
            <h1 className='text-start'>About Us !</h1>
          <div className='row'>
            <h5 className='d-flex text-start'>ECS Cloud Infotech specializes in providing innovative and comprehensive solutions for CRM, CMS, eCommerce, ERP, POS, HRMS, Payroll Management,Digital Marketing, SEO, and Web & Mobile App Development. We understand the importance of building strong customer relationships and streamlining business processes for success. Our team of experts is dedicated to delivering customized solutions that fit the unique needs of each of our clients.</h5>
            </div>
          </div>
          <div className='col-md-6 col-12'>
            <img className="img-fluid" src={aboutUs} alt='about us'/>
        </div>
        </div>
      </div>
      </div>

      
  )
}

export default About
