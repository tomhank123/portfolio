import { Email, Side } from '@/components';
import config from '@/config';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const EmailContainer: FC<IProps> = (props: IProps) => {
  return (
    <Side orientation='right'>
      <Email>
        <Email.Link href={`mailto:${config.email}`}>{config.email}</Email.Link>
      </Email>
    </Side>
  );
};

export default EmailContainer;
