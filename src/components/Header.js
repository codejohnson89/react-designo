import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/shared/desktop/logo-dark.png';

const Header = () => {
    return(
        <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><figure><img className="img-fluid" src={logo} alt="header logo"/></figure></Navbar.Brand>
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