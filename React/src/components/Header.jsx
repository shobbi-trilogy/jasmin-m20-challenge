// Header.jsx
import React from 'react';
import Navigation from './Navigation';
import Nav from 'react-bootstrap/Nav';

const Header = () => (


  <Nav className="justify-content-end" variant="pills" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/">About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/portfolio" eventKey="link-1">Portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/contact" >
        Contact Me
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/resume" >
        Resume
      </Nav.Link>
    </Nav.Item>
  </Nav>
);


export default Header;

{/* <header>
<h1>Jasmine</h1>
<Navigation />
</header> */}