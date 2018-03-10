/* eslint-disable import/no-extraneous-dependencies,jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import Link from '../../../components/Link/Link';
import s from './Modal.css';

const Modal = props => {
    const { modalState, toggle } = props;
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
                    <ul>
                        <li>
                            <strong>Read:</strong> Modal windows will probably
                            tell you something important so don't forget to read
                            what it says.
                        </li>
                        <li>
                            <strong>Look:</strong> modal windows enjoy a certain
                            kind of attention; just look at it and appreciate
                            its presence.
                        </li>
                        <li>
                            <strong>Close:</strong> click on the button below to
                            close the modal.
                        </li>
                    </ul>
                    <button onClick={() => toggle(modalState)}>
                        Close me!
                    </button>
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
export default withStyles(s)(Modal);
