import { Section } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const EducationContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <Container>
        <Section.Title prefix='05. '>Education</Section.Title>
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
              <div>
                <h5>
                  Bachelor Degree <small style={{ color: '#64ffda'}}>@SaiGon University</small>
                </h5>
                <small className='text-dark'>May, 2014 — Present</small>
                <p>
                  Designed and developed user-friendly website, including optimized check-out page that increased user
                  clicks, and subsequently customer purchases by 20%.
                </p>
              </div>
            </Col>
          </Row>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default EducationContainer;
