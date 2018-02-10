/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Navbar from './shared/Navbar';
import s from './Landing.css';

import { toggleState } from '../../actions/pageActions';

class Landing extends React.Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
    navState: PropTypes.bool.isRequired,
  };

  render() {
    const { toggle, navState } = this.props;
    return (
      <div className={s.mainLayer}>
        <div>22</div>
        <div>22</div>
        <div />
      </div>
    );
  }
}

const mapState = state => ({
  navState: state.pageActions.navState,
});

const mapDispatch = {
  toggle: toggleState,
};

export default connect(mapState, mapDispatch)(withStyles(s)(Landing));
