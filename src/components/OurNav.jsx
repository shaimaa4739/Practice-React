import React from 'react';
import {Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export default function OurNav() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand className="font-weight-bold display-1" to="/home">S Web</Navbar.Brand>
                <Nav className="me-auto">
                <NavLink className="m-3 text-warning" to="/home">Home</NavLink>
                <NavLink className="m-3 text-warning" to="/users">Users</NavLink>
                <NavLink className="m-3 text-warning" to="/login">Log out</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </>
    );
}