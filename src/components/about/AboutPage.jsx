import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import HorseIcon from '../../assets/images/horseicon.png'; 

const AboutPage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <div className="text-center mb-4">
                <Image
                  src={HorseIcon}
                  roundedCircle
                  width={150}
                  height={150}
                  className="mb-3"
                  alt="About Us"
                />
                <Card.Title as="h1">About Us</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <a
                    href="https://chatashali.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chatashali.com
                  </a>
                </Card.Subtitle>
              </div>
              <Card.Text>
                Welcome to Chatashali! We are dedicated to providing the best
                service possible. Our team works hard to ensure customer
                satisfaction.
                <br />
                <br />
                This application is calculate the Anka Yantra based on the user's birth details.
                We use the latest technologies to create a seamless experience for our users.
                <br />
                <br />
                We leverage modern technologies like React and Bootstrap to
                build responsive and user-friendly web applications. Our mission
                is to deliver high-quality, scalable solutions.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
