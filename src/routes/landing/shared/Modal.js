/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../../components/Link/Link';
import s from './Modal.css';

const Modal = props => {
  const { modalState, toggle } = props;
  console.log(modalState);
  return [
    <div className={`${s.mdModal} ${s.mdEffect1} ${props.modalState ? s.mdShow : s.mdHide}`}>
      <div className={s.mdContent}>
        <h3>Modal Dialog</h3>
        <div>
          <p>
            This is a modal window. You can do the following things with it:
          </p>
          <ul>
            <li>
              <strong>Read:</strong> Modal windows will probably tell you
              something important so don't forget to read what it says.
            </li>
            <li>
              <strong>Look:</strong> modal windows enjoy a certain kind of
              attention; just look at it and appreciate its presence.
            </li>
            <li>
              <strong>Close:</strong> click on the button below to close the
              modal.
            </li>
          </ul>
          <button onClick={() => toggle(modalState)}>Close me!</button>
        </div>
      </div>
    </div>,
    <div className={s.mdOverlay} onClick={() => toggle(modalState)} />,
  ];
};

Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
};
export default withStyles(s)(Modal);
