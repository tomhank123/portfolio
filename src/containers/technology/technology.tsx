import technologiesData from '@/fixtures/technologies.json';
import * as React from 'react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const TechnologyContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-light py-4'>
      <Container>
        <h1 className='mb-3'>Technologies</h1>
        <Row>
          {technologiesData.map((item) => (
            <Col xs={6} sm={3} lg={2} className='mb-3'>
              <Card className='h-100 text-dark'>
                <Card.Body className='d-flex flex-column align-items-center justify-content-start'>
                  <img src={item.thumb} alt={item.title} className='w-75 mb-auto'/>
                  <h6>{item.title}</h6>
                  <small className='text-muted'>{item.issuedBy}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TechnologyContainer;
