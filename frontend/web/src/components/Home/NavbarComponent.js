import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { Mouse } from 'react-bootstrap-icons'
import { ChatRightQuote } from 'react-bootstrap-icons'

const NavbarComponent = () => {
    const location = useLocation();
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Cipher <ChatRightQuote /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} active={location.pathname === "/" ? true : false} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} active={location.pathname === "/about" ? true : false} to="/about">About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/auth">Login/Signup</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent
