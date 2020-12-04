import { Contact } from '@/components';
import config from '@/config';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const ContactContainer: FC<IProps> = (props: IProps) => {
  return (
    <Contact>
      <Contact.Overline>What’s Next?</Contact.Overline>
      <Contact.Title>Get In Touch</Contact.Title>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a
        question or just want to say hi, I'll try my best to get back to you!
      </p>
      <Contact.EmailLink href={`mailto:${config.email}`}>Say Hello</Contact.EmailLink>
    </Contact>
  );
};

export default ContactContainer;
