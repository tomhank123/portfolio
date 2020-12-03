import { Header } from '@/components';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const HeaderContainer: FC<IProps> = (props: IProps) => {
  return (
    <Header>
      <Header.Title>Header Container</Header.Title>
    </Header>
  );
};

export default HeaderContainer;
