import * as React from 'react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const ProductContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-secondary py-4'>
      <Container>
        <Row>
          <Col sm={4}>
            <Card className='h-100 text-dark' bg='secondary'>
              <Card.Body>
                <h2>IMDb Clone</h2>
                <p>A simple Google Keep clone built with Vue and Firebase.</p>
                <p>
                  <span className='text-dark'>Technologies: </span>
                  <i>React JS, Hooks, Typescript</i>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8}>
            <Card className='h-100 text-dark' bg='secondary'>
              <Card.Body>
                <img src='https://i.ytimg.com/vi/rm9kPoYhylw/maxresdefault.jpg' alt='my-product' className='mw-100' />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductContainer;
