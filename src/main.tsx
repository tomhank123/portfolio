import {
  BiographyContainer,
  CertificateContainer,
  ContactContainer,
  HeaderContainer,
  ProductContainer,
  ProjectContainer,
  TechnologyContainer,
  JumbotronContainer
} from '@/containers';
import * as React from 'react';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <JumbotronContainer />
      <BiographyContainer />
      <CertificateContainer />
      <section className='bg-secondary text-dark py-4'>
        <Container>
          <h1>Experiences and Skills</h1>
        </Container>
      </section>
      <TechnologyContainer />
      <section className='bg-secondary text-dark py-4'>
        <Container>
          <h1>Education</h1>
        </Container>
      </section>
      <ProjectContainer />
      <ProductContainer />
      <ContactContainer />
    </div>
  );
};

export default App;
