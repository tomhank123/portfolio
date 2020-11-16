import * as React from 'react';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const SkillContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-secondary text-dark py-4'>
      <Container>
        <Row>
          <Col sm={3}>
            <h1>Skills</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </Col>
          <Col sm={9}>
            <Row>
              <Col sm={6}>
                <h5>Programming Languages</h5>
                <p>Javascript, HTML, CSS</p>
              </Col>
              <Col sm={6}>
                <h5>Frameworks & Platforms</h5>
                <p>ReactJS, VueJS, jQuery / Twitter Bootstrap / Materialize CSS, Firebase</p>
              </Col>
              <Col sm={6}>
                <h5>Version Control</h5>
                <p>Git (Git Shell & Github)</p>
              </Col>
              <Col sm={6}>
                <h5>Knowledge</h5>
                <ul>
                  <li>Deep understanding about OOP, Design Pattern, SOLID principles, Dependency Injection, ...</li>
                  <li>Good understanding about the Agile and Scrum process</li>
                  <li>Good understanding software design, database design, RestfulAPI, ...</li>
                  <li>Good time management, presentation and teamwork skills ...</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SkillContainer;
