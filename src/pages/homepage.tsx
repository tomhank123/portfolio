import {
  BiographyContainer,
  CertificateContainer,
  ContactContainer,
  EducationContainer,
  ExperienceContainer,
  FeaturedContainer,
  JumbotronContainer,
  LayoutContainer,
  ProjectContainer,
  SkillContainer,
  TechnologyContainer,
  JobsContainer
} from '@/containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const Homepage = () => {
  return (
    <LayoutContainer>
      <Helmet title='Duc Tran' />

      <main className='fill-height' style={{ counterReset: 'section' }}>
        <JumbotronContainer />
        <BiographyContainer />
        <JobsContainer />
        <FeaturedContainer />
        <ProjectContainer />
        <ContactContainer />
        {false && (
          <>
            <TechnologyContainer />
            <SkillContainer />
            <ExperienceContainer />
            <EducationContainer />
            <CertificateContainer />
          </>
        )}
      </main>
    </LayoutContainer>
  );
};

export default Homepage;
