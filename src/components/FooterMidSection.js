import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


/**
 * This function returns a Container component with a div that contains a div with a h2 and p tag and a
 * Link component with a Button component
 * @returns A functional component that returns a container with a div with a class of
 * midsection-container. This div contains a div with a class of text-content and a link to the contact
 * page.
 */
const FooterMidSection = () => {
    return (
        <Container className="midsection">
            <div className="midsection-container">
                <div className="text-content">
                    <h2>let's talk about <br></br>your project</h2>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow. Get in touch</p>
                </div>
                <Link to="/contact"><Button className="btn-custom">get in touch</Button></Link>
            </div>
        </Container>
    )
}

export default FooterMidSection;