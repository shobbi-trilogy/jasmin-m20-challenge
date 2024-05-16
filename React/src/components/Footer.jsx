// Footer.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Footer = () => (

<Card className='footer'>
  
  <Card.Body>

    {/* <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text> */}
    <Button className="m-1 p-1"  variant="primary"><a className="text-white" target="_blank"  href="https://github.com/J-0987">GitHub</a></Button>
    <Button className="m-1 p-1" variant="primary"><a className="text-white" target="_blank"  href="https://www.linkedin.com/in/jasminejasani/">LinkedIn</a></Button>
    <Button  className="m-1 p-1" variant="primary"><a className="text-white"  target="_blank" href="https://medium.com/@jasminejayeshjasani">Medium</a></Button>
  </Card.Body>
</Card>

      
    );

  
 


export default Footer;