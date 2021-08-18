import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return(
        <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><div id="circle"></div>designo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets">our company</Nav.Link>
                            <Nav.Link href="#memes">locations</Nav.Link>
                            <Nav.Link href="#memes">contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;