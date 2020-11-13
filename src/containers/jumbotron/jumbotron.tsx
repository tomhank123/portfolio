import * as React from 'react';
import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const JumbotronContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-light py-5'>
      <Container>
        <Row>
          <Col sm={8}>
            <p className='lead text-warning'>Hi, my name is</p>
            <h1 className='display-2 font-weight-bold'>Brittany Chiang.</h1>
            <h2 className='display-4 font-weight-bold'>I build things for the web.</h2>
            <p className='lead'>
              I'm a software engineer based in Boston, MA specializing in building (and occasionally designing)
              exceptional websites, applications, and everything in between.
            </p>
            <Button variant='outline-warning'>Get In Touch</Button>
            <Button variant='secondary' className='ml-2'>
              Download My CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JumbotronContainer;
