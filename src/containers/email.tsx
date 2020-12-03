import { Email, Side } from '@/components';
import config from '@/config';
import * as React from 'react';
import { FC } from 'react';

interface IProps {
  isHome: boolean;
}

const EmailContainer: FC<IProps> = ({ isHome }: IProps) => {
  return (
    <Side isHome={isHome} orientation='right'>
      <Email>
        <Email.Link href={`mailto:${config.email}`}>{config.email}</Email.Link>
      </Email>
    </Side>
  );
};

export default EmailContainer;
