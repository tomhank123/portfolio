import * as React from 'react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import projectData from '@/fixtures/projects.json';

interface IProps {}

const ProjectContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-light py-4'>
      <Container>
        <h1 className='mb-3'>My Projects</h1>
        <Row>
          { projectData.map((project) => (
            <Col xs={6} sm={3} lg={3} className='mb-3'>
              <Card className='h-100'>
                <Card.Body className='border-0 text-dark'>
                  <img src='https://i.ytimg.com/vi/rm9kPoYhylw/maxresdefault.jpg' alt='my-product' className='mw-100 mb-3' />
                  <h6>{project.title}</h6>
                  <small>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectContainer;
