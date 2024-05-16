import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function About() {
    return (
      <div>
        <h1 >About Me</h1>
        <Container>
      <Row>
        {/* <Col xs={6} md={4}>
          <Image src="/assets/image.jpeg" rounded />
        </Col> */}
        {/* <Col xs={6} md={4}>
          <Image src="/assets/image.jpeg" roundedCircle />
        </Col> */}
        <Col xs={6} md={4}>
          <Image src="/assets/image.jpeg" thumbnail />
        </Col>
        
      </Row>
    </Container>
        <p>
          My name is Jasmine Jasani. I made a decision to enrol in a bootcamp to learn coding, an entirely new feat. My portfolio attests to my lack of experience, but not my lack of determination to get better over time!
        </p>
      </div>
    );
  }
  