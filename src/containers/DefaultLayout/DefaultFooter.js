import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span><a href="https://www.apple.com/lae/ios/app-store/">BusTicketingApp</a> &copy; 2018 CSSE Group WE-01-04</span>
        <span className="ml-auto">Powered by <a href="https://www.facebook.com/sahan.prabodh">Sahan Dharmapriya</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
