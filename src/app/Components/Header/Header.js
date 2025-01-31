"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-slate-700 text-white shadow-md" // Darker slate color with shadow
      style={{ height: "7rem" }} // Set fixed height
    >
      <Container>
        {/* Tasty Ten Branding */}
        <Navbar.Brand
          href="#home"
          className="text-2xl font-bold text-white uppercase tracking-widest border-b-2 border-transparent hover:border-yellow-400 transition-all duration-300"
        >
          Tasty Ten
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-none"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto space-x-6 text-lg font-medium">
            <Nav.Link
              href="#home"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Favourites
            </Nav.Link>
            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              className="text-white"
            >
              <NavDropdown.Item
                href="#action/3.1"
                className="hover:bg-yellow-400 hover:text-white"
              >
                Action
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.2"
                className="hover:bg-yellow-400 hover:text-white"
              >
                Another Action
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/3.3"
                className="hover:bg-yellow-400 hover:text-white"
              >
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="#action/3.4"
                className="hover:bg-yellow-400 hover:text-white"
              >
                Separated Link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
