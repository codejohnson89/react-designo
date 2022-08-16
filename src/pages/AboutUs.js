import React from 'react';
import Jumbotron from '../components/Jumbotron';

import hero from '../assets/about/desktop/bg-pattern-hero-about-desktop.svg';

import Locations from '../components/Locations';


/**
 * This function returns a Jumbotron component with a background image, a div with a class of aboutUs,
 * a div with a class of content, a div with a class of bgImage, a div with a class of
 * about-special-jumbotron, a Jumbotron component, a div with a class of content, a div with a class of
 * bgImage, a Locations component, a div with a class of about-special-jumbotron, a Jumbotron
 * component, a div with a class of content, a div with a class of bgImage
 * @returns A React Fragment
 */
const AboutUs = () => {
    return (
        <>
            <Jumbotron mImage={hero}>
                <div className="aboutUs">
                    <div className="content">
                        <h1>about us</h1>
                        <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
                    </div>
                    <div className="bgImage"></div>
                </div>
            </Jumbotron>
            <div className="about-special-jumbotron">
                <Jumbotron>
                    <div className="bgImage"></div>
                    <div className="content">
                        <h2>World-class talent</h2>
                        <p>We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                        crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>
                        <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                        impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                    </div>
                </Jumbotron>
            </div>
            <Locations />
            <div className="about-special-jumbotron reverse">
                <Jumbotron>
                <div className="content">
                        <h2>The real deal</h2>
                        <p>As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                        <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                    </div>
                    <div className="bgImage"></div>
                </Jumbotron>
            </div>
        </>
    )
}

export default AboutUs;