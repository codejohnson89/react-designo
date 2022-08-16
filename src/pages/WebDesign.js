import React from 'react';
import Jumbotron from '../components/Jumbotron';

import bgImage from '../assets/web-design/desktop/bg-pattern-intro-web.svg'
import graphic from '../assets/home/desktop/image-graphic-design.jpg';
import app from '../assets/home/desktop/image-app-design.jpg';
import Designs from '../components/Designs';
import Card from '../components/Card';

import builder from '../assets/web-design/desktop/image-builder.jpg';
import blogr from '../assets/web-design/desktop/image-blogr.jpg';
import camp from '../assets/web-design/desktop/image-camp.jpg';
import express from '../assets/web-design/desktop/image-express.jpg';
import photon from '../assets/web-design/desktop/image-photon.jpg';
import transfer from '../assets/web-design/desktop/image-transfer.jpg';

/**
 * It returns a div with a Jumbotron, a div with a class of card-container card-container-grid, and a
 * div with a class of project-container
 * @returns A div with a class of subpage, a Jumbotron, a div with a class of card-container
 * card-container-grid, a div with a class of project-container, and a Designs component.
 */
const WebDesign = () => {
    return (
        <>
        <div className="subpage">
            <Jumbotron mImage={bgImage} >
                <h1>web design</h1>
                <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
            </Jumbotron>
            <div className="card-container card-container-grid">
                <Card image={builder} altText="builder site" heading="builder" text="Connects users with local contractors based on their location"/>
                <Card image={blogr} altText="blogr site" heading="blogr" text="Blogr is a platform for creating an online blog or publication"/>
                <Card image={camp} altText="camp site" heading="camp" text="Get expert training in coding, data, design, and digital marketing"/>
                <Card image={express} altText="express site" heading="Express" text="A multi-carrier shipping website for ecommerce businesses"/>
                <Card image={photon} altText="photon site" heading="photon" text="A state-of-the-art music player with high-resolution audio and DSP effects"/>
                <Card image={transfer} altText="transfer site" heading="transfer" text="Site for low-cost money transfers and sending money within seconds"/>
            </div>
            <div className="project-container">
            <Designs image={app} heading="app design" text="view projects" altText="app design" link="/appdesign" />
            <Designs image={graphic} heading="graphic design" text="view projects" altText="graphic design" link="/graphicdesign" />
            </div>
        </div>
        </>
    )
}

export default WebDesign;