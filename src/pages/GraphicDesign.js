import React from 'react';
import Card from '../components/Card';
import Jumbotron from '../components/Jumbotron';

import boxed from '../assets/graphic-design/desktop/image-boxed-water.jpg';
import change from '../assets/graphic-design/desktop/image-change.jpg';
import science from '../assets/graphic-design/desktop/image-science.jpg';

import app from '../assets/home/desktop/image-app-design.jpg';
import web from '../assets/home/desktop/image-web-design-large.jpg';

import Designs from '../components/Designs';


const GraphicDesign = () => {
    return (
        <>
            <div className="subpage three">
                <Jumbotron>
                    <h1>graphic design</h1>
                    <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
                </Jumbotron>
                <div className="card-container card-container-grid">
                    <Card image={boxed} altText="tim brown" heading="Tim Brown" text="A book cover designed for Tim Brown’s new release, ‘Change’"/>
                    <Card image={change} altText="Boxed water" heading="Boxed water" text="A simple packaging concept made for Boxed Water"/>
                    <Card image={science} altText="science" heading="science!" text="A poster made in collaboration with the Federal Art Project"/>
                </div>
                <div className="project-container">
                    <Designs image={web} heading="web design" text="view projects" altText="web design" link="/webdesign" />
                    <Designs image={app} heading="app design" text="view projects" altText="app design" link="/appdesign" />
                </div>
            </div>
        </>
    )
}

export default GraphicDesign;