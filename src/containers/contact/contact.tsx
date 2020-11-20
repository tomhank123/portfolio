import { Button, Section } from '@/components';
import * as React from 'react';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const ContactContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section className='py-5'>
      <Container>
        <Section.Body>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6} className='text-center'>
              <h1 className='mb-3'>Get In Touch</h1>
              <p className='lead'>
                Are you working on something great? I would love to help make it happen! Drop me a letter and start your
                project right now! Just do it.
              </p>
              <Button size='lg'>Say Hello</Button>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default ContactContainer;
