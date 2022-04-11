import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="light">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link className="me-4" href="/">Home</Nav.Link>
                    <Nav.Link className="me-4" href="/search">Search</Nav.Link>
                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;