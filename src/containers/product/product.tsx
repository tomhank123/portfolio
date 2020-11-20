import { Project, Section } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const ProductContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <Container>
        <Section.Body>
          <Row>
            <Col sm={4}>
              <Project>
                <Project.Header>
                  <FontAwesomeIcon icon={['fas', 'external-link-alt']} size='lg' />
                </Project.Header>
                <Project.Body>
                  <Project.Title>IMDb Clone</Project.Title>
                  <Project.Text>
                    Embeddable web player widget for Apple Music that lets users log in and listen to full song playback
                    in the browser leveraging MusicKit.js. Read more about this project on 9to5Mac.
                  </Project.Text>
                </Project.Body>
                <Project.Footer>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>React JS</li>
                    <li className='list-inline-item'>Hooks</li>
                    <li className='list-inline-item'>Typescript</li>
                  </ul>
                </Project.Footer>
              </Project>
            </Col>
            <Col sm={8}>
              <Card bg='transparent'>
                <Card.Body className='p-0'>
                  <img
                    src='https://i.ytimg.com/vi/rm9kPoYhylw/maxresdefault.jpg'
                    alt='my-product'
                    className='mw-100 rounded'
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default ProductContainer;
