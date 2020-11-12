import {
  CertificateContainer,
  ContactContainer,
  HeaderContainer,
  ProductContainer,
  ProjectContainer,
  TechnologyContainer,
} from '@/containers';
import * as React from 'react';

const App = () => {
  return (
    <div className='App'>
      <HeaderContainer />
      <section>
        <h1>Hero</h1>
      </section>
      <section>
        <h1>About</h1>
      </section>
      <CertificateContainer />
      <section>
        <h1>My service</h1>
      </section>
      <TechnologyContainer />
      <section>
        <h1>Experiences and Skills</h1>
      </section>
      <section>
        <h1>Education</h1>
      </section>
      <ProjectContainer />
      <ProductContainer />
      <ContactContainer />
    </div>
  );
};

export default App;
