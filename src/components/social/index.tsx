import { Icon } from '@/components/icons';
import Side from '@/components/side';
import config from '@/config';
import * as React from 'react';
import { FC } from 'react';
import Anchor from './Anchor';
import List from './List';
import ListItem from './ListItem';
import Wrapper from './Wrapper';
interface IProps {
  isHome: boolean;
}

const SocialContainer: FC<IProps> = ({ isHome }: IProps) => {
  return (
    <Side isHome={isHome} orientation='left'>
      <Wrapper>
        <List>
          {config.socialMedia &&
            config.socialMedia.map(({ url, name }, index) => (
              <ListItem key={index}>
                <Anchor href={url} target='_blank' aria-label={name}>
                  <Icon name={name} />
                </Anchor>
              </ListItem>
            ))}
        </List>
      </Wrapper>
    </Side>
  );
};

export default SocialContainer;
