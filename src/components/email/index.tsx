import config from '@/config';
import * as React from 'react';
import { FC } from 'react';
import Side from '@/components/side';
import EmailLink from './EmailLink';
import Wrapper from './Wrapper';

interface IProps {
  isHome: boolean;
}

const Email: FC<IProps> = ({ isHome }: IProps) => {
  return (
    <Side isHome={isHome} orientation='right'>
      <Wrapper>
        <EmailLink href={`mailto:${config.email}`}>{config.email}</EmailLink>
      </Wrapper>
    </Side>
  );
};

export default Email;
