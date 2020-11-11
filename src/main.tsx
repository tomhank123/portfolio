import * as React from 'react';
import { CertificateContainer, ContactContainer, HeaderContainer } from '@/containers';

const App = () => {
  return (
    <div className='App text-center'>
      <HeaderContainer />
      <section>
        <h1>Hero</h1>
      </section>
      <CertificateContainer />
      <section>
        <h1>About</h1>
      </section>
      <section>
        <h1>My service</h1>
      </section>
      <section>
        <h1>Technologies</h1>
      </section>
      <section>
        <h1>Experiences and Skills</h1>
      </section>
      <section>
        <h1>Education</h1>
      </section>
      <section>
        <h1>Project</h1>
      </section>
      <section>
        <h1>Product</h1>
      </section>
      <ContactContainer />
    </div>
  );
}

export default App;
