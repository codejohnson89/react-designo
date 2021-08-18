import React from 'react';
import Jumbotron from '../components/Jumbotron';

import { Button, Container } from 'react-bootstrap';
import phoneImg from '../assets/home/desktop/image-hero-phone.png';
import Oval from '../components/Oval';
import HomeProjects from '../components/HomeProjects';
import Designs from '../components/Designs';
import AboutHomeCard from '../components/AboutHomeCard';
import friendly from '../assets/home/desktop/illustration-friendly.svg';
import passionate from '../assets/home/desktop/illustration-passionate.svg';
import resourceful from '../assets/home/desktop/illustration-resourceful.svg';


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
            <Container>
                <div className="card-container">
                    <AboutHomeCard heading="passionate" altText="passionate" image={passionate} text="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."/>
                    <AboutHomeCard heading="resourceful" altText="resourceful" image={resourceful} text="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."/>
                    <AboutHomeCard heading="friendly" altText="friendly" image={friendly} text="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we  strive to give them the best experience a company can provide."/>
                </div>
            </Container>
        </>
    )
}

export default Home;