import * as React from 'react';
import { FC } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

interface IProps {}

const ContactContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-light py-4'>
      <Container>
        <h1 className='mb-3'>Contact me</h1>
        <Row>
          <Col xs={6}>
            <Card>
              <Card.Body className='p-5 text-dark'>
                <h1>Contact Form</h1>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Body className='p-5 text-dark'>
                <h1>Map</h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactContainer;
