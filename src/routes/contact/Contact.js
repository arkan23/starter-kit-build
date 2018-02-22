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
import s from './Contact.css';

import { toggleNavbarDisplay } from '../../actions/pageActions';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    state1: PropTypes.bool.isRequired,
  };

  render() {
    const { toggle, state1 } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
          <button onClick={() => toggle(state1)}>Test Redux bitCH!!</button>
          <span>label - {state1 ? 'true' : ''}</span>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  state1: state.pageActions.state1,
});

const mapDispatch = {
  toggle: toggleNavbarDisplay,
};

export default connect(mapState, mapDispatch)(withStyles(s)(Contact));
