/**
 *
 * Layout
 *
 */

// import Backdrop from 'components/Backdrop';
import Email from 'components/Email';
import Header from 'components/Header';
import Social from 'components/Social';
import Footer from 'components/Footer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectLocation } from 'containers/App/selectors';

import Wrapper from './Wrapper';

export function Layout({ children, location }) {
  const isHome = location.pathname === '/';
  const [isLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading, location.hash]);

  // {isLoading && isHome ? (
  //   <Backdrop finishLoading={() => setIsLoading(false)} />
  // ) : (
  //   )}
  return (
    <React.Fragment>
      <Wrapper>
        <Header isHome={isHome} />
        <Social isHome={isHome} />
        <Email isHome={isHome} />
        <div id="content">
          {children}
          <Footer />
        </div>
      </Wrapper>
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

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Layout);
