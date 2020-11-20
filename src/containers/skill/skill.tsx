import { Section } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const SkillContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='py-4'>
      <Section>
        <Container>
          <Section.Title prefix='03. '>Skills</Section.Title>
          <Section.Body>
            <Row>
              <Col sm={3}>
                <p className='lead text-right' style={{ color: '#64ffda' }}>
                  <FontAwesomeIcon icon={['fab', 'uncharted']} size='2x' />
                  <FontAwesomeIcon icon={['fab', 'uncharted']} size='4x' />
                  <br/>
                  <FontAwesomeIcon icon={['fab', 'uncharted']} size='3x' />
                </p>
              </Col>
              <Col sm={9}>
                <Row>
                  <Col sm={6}>
                    <h5>Programming Languages</h5>
                    <ul>
                      <li>Javascript</li>
                      <li>HTML(5)</li>
                      <li>(S)CSS</li>
                    </ul>
                  </Col>
                  <Col sm={6}>
                    <h5>Version Control</h5>
                    <p>Git (Git Shell & Github)</p>
                  </Col>
                  <Col sm={6}>
                    <h5>Frameworks & Platforms</h5>
                    <ul>
                      <li>ReactJS</li>
                      <li>VueJS</li>
                      <li>Typescript</li>
                      <li>React Native</li>
                      <li>jQuery</li>
                      <li>Firebase</li>
                      <li>Twitter Bootstrap, Materialize CSS</li>
                    </ul>
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
          </Section.Body>
        </Container>
      </Section>
    </section>
  );
};

export default SkillContainer;
