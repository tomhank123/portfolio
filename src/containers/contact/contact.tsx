import { Button, Section } from '@/components';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const ContactContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section className='py-5'>
      <div>
        <Section.Body>
          <div>
            <div className='text-center'>
              <h1 className='mb-3'>Get In Touch</h1>
              <p className='lead'>
                Are you working on something great? I would love to help make it happen! Drop me a letter and start your
                project right now! Just do it.
              </p>
              <Button>Say Hello</Button>
            </div>
          </div>
        </Section.Body>
      </div>
    </Section>
  );
};

export default ContactContainer;
