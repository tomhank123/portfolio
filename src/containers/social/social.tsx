import { Social } from '@/components';
import { Icon } from '@/components/icons';
import * as React from 'react';
import { FC } from 'react';
import socialMedia from '@/fixtures/socialMedia.json';

interface IProps {}

const SocialContainer: FC<IProps> = (props: IProps) => {
  return (
    <Social>
      <Social.List>
        { socialMedia && socialMedia.map(({ url, name }, index) => (
          <Social.Item key={index}>
            <Social.Link href={url} aria-label={name}>
              <Icon name={name} />
            </Social.Link>
          </Social.Item>
        ))}
      </Social.List>
    </Social>
  );
};

export default SocialContainer;
