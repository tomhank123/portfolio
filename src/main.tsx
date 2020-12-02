import {
  BiographyContainer,
  CertificateContainer,
  ContactContainer,
  EducationContainer,
  ExperienceContainer,
  HeaderContainer,
  JumbotronContainer,
  ProductContainer,
  ProjectContainer,
  SkillContainer,
  TechnologyContainer,
  SocialContainer,
  EmailContainer
} from '@/containers';
import * as React from 'react';

const App = () => {
  return (
    <div className='App'>
      <EmailContainer />
      <SocialContainer />
      <HeaderContainer />
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
    </div>
  );
};

export default App;
