import { Avatar, Section, Button } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import avatarJPG from '@/assets/images/avatar.jpg';

interface IProps {}

const BiographyContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <Container>
        <Section.Title prefix={'01. '}>About Me</Section.Title>
        <Section.Body>
          <Row>
            <Col xs={12} sm={8}>
              <p>Hello! I'm Duc, a software engineer based in Ho Chi Minh, VN.</p>
              <p>
                I enjoy creating things that live on the internet, whether that be websites, applications, or anything
                in between. My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
              <p>
                Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement
                where I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
            </Col>
            <Col xs={12} sm={4}>
              <Avatar>
                <Avatar.Image src={avatarJPG} alt='avatar' />
                <Avatar.Title>Duc Tran.</Avatar.Title>
                <Avatar.Subtitle>Front-End Engineer</Avatar.Subtitle>
              </Avatar>
              <div className='text-center'>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} size='1x' />
                </Button>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
                </Button>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'codepen']} size='1x' />
                </Button>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' />
                </Button>
              </div>
            </Col>
            <Col xs={12} sm={12} className='d-none'>
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
                <dd className='col-sm-10'>Go Xoai, Binh Tan, HCMC</dd>
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
            </Col>
          </Row>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default BiographyContainer;
