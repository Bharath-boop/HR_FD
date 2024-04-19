import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import {useLogout} from '../hook/Logout'

function NavBar() {
  let logout=useLogout()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Creative-B-Letter-Logo-Download-1536x864.jpg" width={"105px"}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/employee_list">Employee List</Nav.Link>
          </Nav>
          <Button variant="outline-danger" onClick={logout}>Logout</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
