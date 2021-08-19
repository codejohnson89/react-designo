import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-dark.png';

const Header = () => {
    return(
        <header>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link className="navbar-brand" to="/"><figure><img className="img-fluid" src={logo} alt="header logo"/></figure></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Link className="nav-link" to="/about">our company</Link>
                            <Link className="nav-link" to="/location">locations</Link>
                            <Link className="nav-link" to="/contact">contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;