import { Certificate, Grid, Section } from '@/components';
import certificateData from '@/fixtures/certificates.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

interface IProps {}

const CertificateContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <Container>
        <Section.Title prefix='06. '>Certificates</Section.Title>
        <Section.Body>
          <Grid sm={2} md={4} lg={6}>
            {certificateData.map((item, index) => (
              <Grid.Item className='mb-3' key={index}>
                <Certificate>
                  <FontAwesomeIcon icon={['fas', 'award']} className='mb-3' size='5x' />
                  <Certificate.Title>{item.title}</Certificate.Title>
                  <Certificate.Subtitle>{item.issuedBy}</Certificate.Subtitle>
                </Certificate>
              </Grid.Item>
            ))}
          </Grid>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default CertificateContainer;
