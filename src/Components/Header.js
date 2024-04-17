import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assests/Logo.png";
import "../styles/Custom.css"; 

function Header() {
  const expand = "lg";
  // useLocation();
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar>
            <Navbar.Brand as={Link} to="/home">
              <img src={Logo} alt="WWG" className="img-fluid" style={{ maxWidth: "250px", maxHeight: "100px" }}/>
            </Navbar.Brand></Navbar>
             {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> 
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  CRM WEBSITE
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 gap-4 mt-4">
                  
                  <NavLink 
                  to="/about"
                   exact
                   activeClassName="active"
                   
                   className="custom-nav-link text-primary"
                   style={{
                     color: "rgba(0, 0, 0, 0.85)",
                     textDecoration: "none",
                   }}
                 >
                   About</NavLink>
                  {/* <NavLink  
                  to="/home"
                   exact
                   activeClassName="active"
                   className="custom-nav-link text-primary"
                   style={{
                     color: "rgba(0, 0, 0, 0.85)",
                     textDecoration: "none",
                   }}>Home</NavLink> */}
                  <NavLink 
                   to="/contact"
                   exact
                   activeClassName="active"
                   className="custom-nav-link text-primary"
                   style={{
                     color: "rgba(0, 0, 0, 0.85)",
                     textDecoration: "none",
                   }}
                  >Contact</NavLink>
                  <NavLink 
                   to="/feature"
                   exact
                   activeClassName="active"
                   className="custom-nav-link text-primary"
                   style={{
                     color: "rgba(0, 0, 0, 0.85)",
                     textDecoration: "none",
                   }}
                  >Features</NavLink>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  /> */}
                  <Nav className="d-flex mt-3 ">
                   <button className="btn donateBtn">Sign In</button>

                   <button className="btn volunteerBtn">Sign Up</button>
                   </Nav>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
