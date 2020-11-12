import certificateData from '@/fixtures/certificates.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

interface IProps {}

const CertificateContainer: FC<IProps> = (props: IProps) => {
  return (
    <section className='bg-dark text-light py-4'>
      <Container>
        <h1 className='mb-3'>Certificates</h1>
        <Row>
          {certificateData.map((item) => (
            <Col xs={6} sm={3} lg={2} className='mb-3'>
              <Card className='h-100 text-dark text-center'>
                <Card.Body>
                  <FontAwesomeIcon icon={['fas', 'award']} className='text-muted mb-3' size='5x' />
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

export default CertificateContainer;
