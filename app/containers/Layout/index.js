/**
 *
 * Layout
 *
 */

import Backdrop from 'components/Backdrop';
import Email from 'components/Email';
import Header from 'components/Header';
import Social from 'components/Social';
import Footer from 'containers/Footer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { makeSelectLocation } from 'containers/App/selectors';

import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';

export function Layout({ children, location }) {
  useInjectReducer({ key: 'layout', reducer });
  useInjectSaga({ key: 'layout', saga });

  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location.hash]);

  return (
    <React.Fragment>
      {isLoading && isHome ? (
        <Backdrop finishLoading={() => setIsLoading(false)} />
      ) : (
        <Wrapper>
          <Header isHome={isHome} />
          <Social isHome={isHome} />
          <Email isHome={isHome} />
          <div id="content">
            {children}
            <Footer />
          </div>
        </Wrapper>
      )}
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Layout);
