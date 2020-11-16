import * as React from 'react';
import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const ContactContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-secondary py-4 text-center'>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <h1 className='mb-3'>Get In Touch</h1>
            <p className='lead'>
              Are you working on something great? I would love to help make it happen! Drop me a letter and start your
              project right now! Just do it.
            </p>
            <Button variant='outline-warning' size='lg'>
              Say Hello
            </Button>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactContainer;
