import { Grid, Section, Technology } from '@/components';
import technologiesData from '@/fixtures/technologies.json';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

interface IProps {}

const TechnologyContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <Container>
        <Section.Title prefix='02. '>Technologies</Section.Title>
        <Section.Body>
          <Grid sm={2} md={4} lg={6}>
            {technologiesData.map((item, index) => (
              <Grid.Item key={index}>
                <Technology>
                  <FontAwesomeIcon icon={['fab', item.icon as IconName]} className='mb-3' size='5x' />
                  <Technology.Title>{item.title}</Technology.Title>
                  <Technology.Subtitle>{item.issuedBy}</Technology.Subtitle>
                </Technology>
              </Grid.Item>
            ))}
          </Grid>
        </Section.Body>
      </Container>
    </Section>
  );
};

export default TechnologyContainer;
