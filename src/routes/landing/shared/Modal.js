/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import Link from '../../../components/Link/Link';
import SaveUser from './../mongo.graphql';

import s from './Modal.css';

const Modal = props => {
    const { modalState, toggle, saveUser, /* users, */ mutate } = props;

    const sendData = () => {
        const nameUser = this.name.value;
        const phoneUser = this.phone.value;
        saveUser(nameUser, phoneUser);
        // console.info(mutate);
        toggle(modalState);
    };

    return [
        <div
            key="modal"
            className={`${s.mdModal} ${s.mdEffect1} ${
                props.modalState ? s.mdShow : s.mdHide
            }`}
        >
            <div className={s.mdContent}>
                <h3>Modal Dialog</h3>
                <div>
                    <p>
                        This is a modal window. You can do the following things
                        with it:
                    </p>
                    <form action="#" className={s.alt} method="POST">
                        <div className={`${s.row} ${s.uniform}`}>
                            <div className={s.contactName}>
                                <input
                                    ref={name => {
                                        this.name = name;
                                    }}
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                />
                            </div>
                            <div className={s.contactPhone}>
                                <input
                                    ref={phone => {
                                        this.phone = phone;
                                    }}
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                />
                            </div>
                        </div>
                    </form>
                    <button onClick={() => sendData()}>Close me!</button>
                </div>
            </div>
        </div>,
        <div
            role="navigation"
            key="modalOverlayLayout"
            className={s.mdOverlay}
            onClick={() => toggle(modalState)}
        />,
    ];
};

Modal.propTypes = {
    toggle: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
};
export default compose(withStyles(s), graphql(SaveUser))(Modal);
