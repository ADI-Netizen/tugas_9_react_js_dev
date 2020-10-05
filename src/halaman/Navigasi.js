import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

function Navigasi() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Berita</Nav.Link>
                <Nav.Link href="#">Live Scores</Nav.Link>
                <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Serie A</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Premier League</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Tarkam League</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Transfer Pemain</Nav.Link>
                <Nav.Link href="#">Tim</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigasi;