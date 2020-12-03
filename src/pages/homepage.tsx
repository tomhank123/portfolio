import {
  BiographyContainer,
  CertificateContainer,
  ContactContainer,
  EducationContainer,
  ExperienceContainer,
  JumbotronContainer,
  LayoutContainer,
  ProductContainer,
  ProjectContainer,
  SkillContainer,
  TechnologyContainer
} from '@/containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <LayoutContainer>
      <Helmet title='Duc Tran' />

      {false && (
        <>
          <JumbotronContainer />
          <BiographyContainer />
          <TechnologyContainer />
          <SkillContainer />
          <ExperienceContainer />
          <EducationContainer />
          <CertificateContainer />
          <ProjectContainer />
          <ProductContainer />
          <ContactContainer />
        </>
      )}
    </LayoutContainer>
  );
};

export default App;
