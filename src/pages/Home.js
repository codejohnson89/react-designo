import React from 'react';
import Jumbotron from '../components/Jumbotron';

import { Button } from 'react-bootstrap';
import phoneImg from '../assets/home/desktop/image-hero-phone.png';
import Oval from '../components/Oval';
import HomeProjects from '../components/HomeProjects';
import Designs from '../components/Designs';


const Home = () => {
    return(
        <>
            <Jumbotron mHeight="640px" mImage="/static/media/bg-pattern-hero-home.7ee19920.svg">
                <div className="homeContent">
                    <h1>Award-winning custom designs and digital branding solutions</h1>
                    <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                    <Button>learn more</Button>
                </div>
                <figure>
                <img className="img-fluid phone" src={phoneImg} alt="hero phone"/>
                </figure>
            </Jumbotron>
            <Oval />
            <HomeProjects />
            <Designs />
        </>
    )
}

export default Home;