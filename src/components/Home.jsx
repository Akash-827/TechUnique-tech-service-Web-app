import React from 'react'
import vg from '../assets/Coding-amico.png'
import front from "../assets/PngItem_3850927.png"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className = "home" id='home'>
      <main>
        <img src={front} alt='front'></img>
        <div>
        <h1>TechUnique</h1>
        <p>Solution to your problems</p>
        </div>
        
      </main>
    </div>
    <div className='home2'>

    
      <img src={vg} alt='Graphics'  />
  <div>
      <p>We are the only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children</p>
    </div>
  </div>

  <div className='home3' id='about'>
    <div>
      <h1>Who are we?</h1>
      <p>
      Welcome to TechUnique!

At TechUnique, we are passionate about technology and committed to providing top-notch tech services to businesses and individuals alike. With a team of highly skilled professionals, we strive to deliver innovative solutions that empower our clients to thrive in the digital world.
Our mission is to bridge the gap between technology and your goals. We understand that technology plays a crucial role in today's rapidly evolving business landscape. That's why we are dedicated to offering tailored tech services that align with your unique needs and aspirations. Whether you need website development, software solutions, IT consulting, or digital marketing services, we are here to assist you every step of the way.
With years of industry experience, our talented team brings a wealth of expertise in various technological domains. From designing and developing cutting-edge websites to creating robust software applications, we have the knowledge and skills to handle diverse projects. We stay up-to-date with the latest industry trends and continuously enhance our capabilities to deliver the best solutions for our clients.
At TechUnique, we prioritize our clients' satisfaction above all else. We believe in building long-lasting relationships based on trust, transparency, and open communication. Our dedicated team takes the time to understand your unique requirements, challenges, and goals, enabling us to provide personalized solutions that drive tangible results. Your success is our success, and we are committed to going the extra mile to ensure your utmost satisfaction.
We look forward to partnering with you and helping you achieve your technology goals. Contact us today to explore how TechUnique can transform your digital presence and drive your success.
      </p>
    </div>

  </div>
  <div className='home4' id='brands'>
    <div>
    <h1>Brands</h1>

    <article>
    <div style={{animationDelay: "0.3s"}}>
      <AiFillGoogleCircle />
      <p>Google</p>
    </div>

    <div style={{animationDelay: "0.5s"}}>
      <AiFillAmazonCircle />
      <p>Amazon</p>
    </div>

    <div style={{animationDelay: "0.7s"}}>
      <AiFillYoutube />
      <p>Youtube</p>
    </div>

    <div style={{animationDelay: "0.9s"}}>
      <AiFillInstagram />
      <p>Instagram</p>
    </div>


    </article>
    </div>
  </div>
    </>
  )
}

export default Home