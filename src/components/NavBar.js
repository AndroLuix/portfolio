import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const iconStyle = {
  border: '3px solid white',
  borderRadius: '50%',
  padding: 10,
}
function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link style={iconStyle} href="https://github.com/AndroLuix" target="_blank" rel="noopener noreferrer"  >
              <FontAwesomeIcon icon={faGithub}  className='fa-2xl'/>
            </Nav.Link>
            <Nav.Link style={iconStyle} href="https://gitlab.com/luigiAdro" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faGitlab}  className='fa-2xl'/>
            </Nav.Link>
            <Nav.Link style={iconStyle} href="https://www.linkedin.com/in/luigi-iadicola/" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faLinkedin} className='fa-2xl' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
