/* eslint-disable import/no-extraneous-dependencies */
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
import Header from './shared/Header';
import Footer from './shared/Footer';
import Modal from './shared/Modal';
import Catalog from './shared/Catalog';
import Features from './shared/Features';
import TimeLine from './shared/TimeLine';
import Calculator from './shared/Calculator';
import s from './Landing.css';

import {
    toggleNavbarDisplay,
    toggleModalDisplay,
} from '../../actions/pageActions';

class Landing extends React.Component {
    static propTypes = {
        toggleNavbar: PropTypes.func.isRequired,
        navState: PropTypes.bool.isRequired,
        toggleModal: PropTypes.func.isRequired,
        modalState: PropTypes.bool.isRequired,
    };

    render() {
        const { toggleNavbar, navState, modalState, toggleModal } = this.props;
        return (
            <div className={s.mainLayer}>
                <Navbar navState={navState} toggle={toggleNavbar} />
                <Header />
                <Features />
                <Catalog />
                <Calculator />
                <TimeLine />
                <Modal modalState={modalState} toggle={toggleModal} />
                <Footer />
                <div />
            </div>
        );
    }
}

const mapState = state => ({
    navState: state.pageActions.navState,
    modalState: state.pageActions.modalState,
});

const mapDispatch = {
    toggleNavbar: toggleNavbarDisplay,
    toggleModal: toggleModalDisplay,
};

export default connect(mapState, mapDispatch)(withStyles(s)(Landing));
