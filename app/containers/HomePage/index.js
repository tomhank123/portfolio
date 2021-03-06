/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Layout from 'containers/Layout';

export function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A portfolio application homepage" />
      </Helmet>
      <div>Homepage</div>
    </Layout>
  );
}

HomePage.propTypes = {};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
