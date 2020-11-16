import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import avatarJPG from '@/assets/images/avatar.jpg';

interface IProps {}

const BiographyContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-secondary text-dark py-4'>
      <Container>
        <Row>
          <Col xs={12} sm={4}>
            <Card className='h-100 text-secondary' bg='dark'>
              <Card.Body>
                <h3>About me</h3>
                <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
                <p>
                  I enjoy creating things that live on the internet, whether that be websites, applications, or anything
                  in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
                <p>
                  Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement
                  where I work on a wide variety of interesting and meaningful projects on a daily basis.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className='text-dark text-center rounded-circle' bg='dark'>
              <Card.Body>
                <img
                  src={avatarJPG}
                  alt='avatar'
                  className='mw-100 rounded-circle'
                />
              </Card.Body>
            </Card>
            <h3 className='text-center mt-3'>Duc Tran</h3>
            <div className='text-center'>
              <Button
                variant='outline-dark'
                className='rounded-circle'
                style={{ width: 40, height: 40, margin: '0 0.25rem' }}
              >
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className='text-dark' size='1x' />
              </Button>
              <Button
                variant='outline-dark'
                className='rounded-circle'
                style={{ width: 40, height: 40, margin: '0 0.25rem' }}
              >
                <FontAwesomeIcon icon={['fab', 'github']} className='text-dark' size='1x' />
              </Button>
              <Button
                variant='outline-dark'
                className='rounded-circle'
                style={{ width: 40, height: 40, margin: '0 0.25rem' }}
              >
                <FontAwesomeIcon icon={['fab', 'codepen']} className='text-dark' size='1x' />
              </Button>
              <Button
                variant='outline-dark'
                className='rounded-circle'
                style={{ width: 40, height: 40, margin: '0 0.25rem' }}
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} className='text-dark' size='1x' />
              </Button>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <Card className='h-100 text-secondary' bg='dark'>
              <Card.Body>
                <dl className='row'>
                  <dt className='col-sm-2'>
                    <FontAwesomeIcon icon={['fas', 'phone-square']} size='1x' />
                  </dt>
                  <dd className='col-sm-10'>(+84) 795825129</dd>

                  <dt className='col-sm-2'>
                    <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size='1x' />
                  </dt>
                  <dd className='col-sm-10'>minhduc.tran.sgu@gmail.com</dd>

                  <dt className='col-sm-2'>
                    <FontAwesomeIcon icon={['fab', 'skype']} size='1x' />
                  </dt>
                  <dd className='col-sm-10'>minhduc.tran.sgu</dd>

                  <dt className='col-sm-2 text-truncate'>
                    <FontAwesomeIcon icon={['fas', 'map-marked-alt']} size='1x' />
                  </dt>
                  <dd className='col-sm-10'>Go Xoai, Binh Hung Hoa A, Binh Tan, HCMC</dd>
                </dl>
                <h3>Interesting</h3>
                <Row>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'walking']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'code']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'plane-departure']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'headphones']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'dumbbell']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'microphone-alt']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'swimmer']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={4} className='mb-3'>
                    <Card className='h-100 text-light text-center border-0' bg='secondary'>
                      <Card.Body>
                        <FontAwesomeIcon icon={['fas', 'cheese']} className='text-dark' size='2x' />
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BiographyContainer;
