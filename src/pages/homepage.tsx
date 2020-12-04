import {
  BiographyContainer,
  CertificateContainer,
  ContactContainer,
  EducationContainer,
  ExperienceContainer,
  JumbotronContainer,
  LayoutContainer,
  ProjectContainer,
  SkillContainer,
  TechnologyContainer,
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
