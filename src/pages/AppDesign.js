import React from 'react';
import Jumbotron from '../components/Jumbotron';
import Designs from '../components/Designs';

import bgImage from '../assets/web-design/desktop/bg-pattern-intro-web.svg';
import design from '../assets/home/desktop/image-graphic-design.jpg';
import web from '../assets/home/desktop/image-web-design-large.jpg';
import Card from '../components/Card';

import airfilter from '../assets/app-design/desktop/image-airfilter.jpg';
import eyecam from '../assets/app-design/desktop/image-eyecam.jpg';
import faceit from '../assets/app-design/desktop/image-faceit.jpg';
import loopstudios from '../assets/app-design/desktop/image-loopstudios.jpg';
import todo from '../assets/app-design/desktop/image-todo.jpg';


/**
 * It returns a div with a jumbotron, a card container, and a project container
 * @returns A div with a class of subpage five, a Jumbotron, a div with a class of card-container
 * card-container-grid, a div with a class of project-container, and a Designs component.
 */
const AppDesign = () => {
    return (
        <>
            <div className="subpage five">
                <Jumbotron mImage={bgImage}>
                <h1>app design</h1>
                <p>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
                </Jumbotron>
                <div className="card-container card-container-grid">
                    <Card image={airfilter} altText="air filter" heading="airfilter" text="Solving the problem of poor indoor air quality by filtering the air" />
                    <Card image={eyecam} altText="eye cam" heading="eyecam" text="Product that lets you edit your favorite photos and videos at any time" />
                    <Card image={faceit} altText="face it" heading="faceit" text="Get to meet your favorite internet superstar with the faceit app" />
                    <Card image={todo} altText="to do" heading="todo" text="A todo app that features cloud sync with light and dark mode" />
                    <Card image={loopstudios} altText="loop studios" heading="loopstudios" text="A VR experience app made for Loopstudios" />
                </div>
                <div className="project-container">
                    <Designs image={web} heading="web design" text="view projects" altText="web design" link="/webdesign" />
                    <Designs image={design} heading="graphic design" text="view projects" altText="graphic design" link="/graphicdesign" />
                </div>
            </div>

        </>
    )
}

export default AppDesign;