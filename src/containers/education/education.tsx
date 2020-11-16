import * as React from 'react';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const EducationContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-secondary text-dark py-4'>
      <Container>
        <Row>
          <Col sm={3}>
            <h1>Education</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </Col>
          <Col sm={9}>
            <div>
              <h5>
                Bachelor Degree <span>@SaiGon University</span>
              </h5>
              <small className='text-dark'>May, 2014 — Present</small>
              <p>
                Designed and developed user-friendly website, including optimized check-out page that increased user
                clicks, and subsequently customer purchases by 20%.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EducationContainer;
