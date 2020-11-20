import { Jumbotron, Button } from '@/components';
import * as React from 'react';
import { FC } from 'react';
import { Container } from 'react-bootstrap';

interface IProps {}

const JumbotronContainer: FC<IProps> = (props: IProps) => {
  return (
    <Jumbotron>
      <Container>
        <Jumbotron.Prefix>Hi, my name is</Jumbotron.Prefix>
        <Jumbotron.Title>Duc Tran.</Jumbotron.Title>
        <Jumbotron.Subtitle>I build things for the web.</Jumbotron.Subtitle>
        <Jumbotron.Text>
          I'm a software engineer based in Boston, MA specializing in building (and occasionally designing)
          exceptional websites, applications, and everything in between.
        </Jumbotron.Text>
        <Button size='lg' className='mt-4'>Get In Touch</Button>
      </Container>
    </Jumbotron>
  );
};

export default JumbotronContainer;
