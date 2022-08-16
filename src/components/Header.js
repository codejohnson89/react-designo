import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/shared/desktop/logo-dark.png';

/**
 * The Header function returns a header element that contains a Navbar element that contains a
 * Container element that contains a Link element that contains a figure element that contains an img
 * element
 * @returns A header with a navbar that collapses on select and expands to lg.
 */
const Header = () => {
    return(
        <header>
            <Navbar collapseOnSelect={true} expand="lg">
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