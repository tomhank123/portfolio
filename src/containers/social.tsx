import { Side, Social } from '@/components';
import { Icon } from '@/components/icons';
import config from '@/config';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const SocialContainer: FC<IProps> = (props: IProps) => {
  return (
    <Side orientation='left'>
      <Social>
        <Social.List>
          {config.socialMedia &&
            config.socialMedia.map(({ url, name }, index) => (
              <Social.Item key={index}>
                <Social.Link href={url} target='_blank' aria-label={name}>
                  <Icon name={name} />
                </Social.Link>
              </Social.Item>
            ))}
        </Social.List>
      </Social>
    </Side>
  );
};

export default SocialContainer;
