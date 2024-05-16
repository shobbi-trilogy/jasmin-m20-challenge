import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

export default function Contact() {

  return (
    <div>
      <h1>Resume</h1>
    <Card>
 
      <Card.Body>
        <Card.Title>Professional History</Card.Title>
        <Card.Text>
          Learn more about me through my resume.
        </Card.Text>
        <Button  className="m-1 p-1" variant="primary"><a className="text-white" href="/assets/resume.pdf" download>Download Resume</a></Button>
      </Card.Body>
    </Card>


         
          </div>
    
    );
  }
  