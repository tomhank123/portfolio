import { NotFound } from '@/components';
import Notfound from '@/components/notfound';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const NotfoundContainer: FC<IProps> = (props: IProps) => {
  return (
    <NotFound>
      <Notfound.Title>404</Notfound.Title>
      <Notfound.Subtitle>Page Not Found</Notfound.Subtitle>
      <Notfound.HomeButton to='/'>Go Home</Notfound.HomeButton>
    </NotFound>
  );
};

export default NotfoundContainer;
