/* eslint-disable react/no-unescaped-entities */
/**
 *
 * Contact
 *
 */

import React, { useEffect, useRef } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';

import Wrapper from './Wrapper';
import EmailLink from './EmailLink';
import Overline from './Overline';
import Title from './Title';

function Contact() {
  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, config.srConfig());
    }
  }, []);

  return (
    <Wrapper id="contact" ref={revealContainer}>
      <Overline>What’s Next?</Overline>
      <Title>Get In Touch</Title>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <EmailLink href={`mailto:${config.email}`}>Say Hello</EmailLink>
    </Wrapper>
  );
}

export default Contact;
