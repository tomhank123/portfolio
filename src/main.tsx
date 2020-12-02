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
  TechnologyContainer,
} from '@/containers';
import * as React from 'react';

const App = () => {
  return (
    <LayoutContainer>
      { false && (
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
