/**
 *
 * Social
 *
 */

import Side from 'components/Side';
import PropTypes from 'prop-types';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from 'utils/config';

import Anchor from './Anchor';
import List from './List';
import ListItem from './ListItem';
import Wrapper from './Wrapper';

function Social({ isHome }) {
  return (
    <Side isHome={isHome} orientation="left">
      <Wrapper>
        <List>
          {config.socialMedia &&
            config.socialMedia.map(({ url, name, prefix }) => (
              <ListItem key={`${url}`}>
                <Anchor href={url} target="_blank" aria-label={name}>
                  <FontAwesomeIcon icon={[prefix, name]} />
                </Anchor>
              </ListItem>
            ))}
        </List>
      </Wrapper>
    </Side>
  );
}

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
