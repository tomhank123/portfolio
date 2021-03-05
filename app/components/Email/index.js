/**
 *
 * Email
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import config from 'utils/config';

import Side from 'components/Side';
import EmailLink from './EmailLink';
import Wrapper from './Wrapper';

function Email({ isHome }) {
  return (
    <Side isHome={isHome} orientation="right">
      <Wrapper>
        <EmailLink href={`mailto:${config.email}`}>{config.email}</EmailLink>
      </Wrapper>
    </Side>
  );
}

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
