import { Jumbotron } from '@/components';
import config from '@/config';
import { loaderDelay, navDelay } from '@/utils';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface IProps {}

const JumbotronContainer: FC<IProps> = (props: IProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <Jumbotron.Prefix>Hi, my name is</Jumbotron.Prefix>;
  const two = <Jumbotron.Title>Duc Tran.</Jumbotron.Title>;
  const three = <Jumbotron.Subtitle>I build things for the web.</Jumbotron.Subtitle>;
  const four = (
    <Jumbotron.Text>
      I'm a software engineer based in Ho Chi Minh, VN specializing in building (and occasionally designing) exceptional
      websites, applications, and everything in between.
    </Jumbotron.Text>
  );
  const five = <Jumbotron.EmailLink href={`mailto:${config.email}`}>Get In Touch</Jumbotron.EmailLink>;
  const items = [one, two, three, four, five];

  return (
    <Jumbotron>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames='fadeup' timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Jumbotron>
  );
};

export default JumbotronContainer;
