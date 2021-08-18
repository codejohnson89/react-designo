import React from 'react';
import { Button, Container } from 'react-bootstrap';


const FooterMidSection = () => {
    return (
        <Container className="midsection">
            <div className="midsection-container">
                <div className="text-content">
                    <h2>let's talk about <br></br>your project</h2>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow. Get in touch</p>
                </div>
                <Button className="btn-custom">get in touch</Button>
            </div>
        </Container>
    )
}

export default FooterMidSection;