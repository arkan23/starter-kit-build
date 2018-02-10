import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from '../../../components/Link/Link';
import s from './Navbar.css';
// // flow
// static propTypes = {
//   toggle: PropTypes.func.isRequired,
//   navState: PropTypes.bool.isRequired,
// };
const Navbar = props => {
  const { navState, toggle } = props;
  return (
    <nav>
      <button className={s.menuIcon} onClick={() => toggle(navState)}>
        <i className="fa fa-bars fa-2x" />
      </button>
      <div className={s.logo}>LOGO</div>
      <div className={s.menu}>
        <ul>
          <li>
            <Link to="/" className={s.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className={s.link}>About</Link>
          </li>
          <li>
            <Link to="/" className={s.link}>Product</Link>
          </li>
          <li>
            <Link to="/" className={s.link}>Contacts</Link>
          </li>
          <li>
            <Link to="/" className={s.link}>{navState ? 'true' : '123'}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  navState: PropTypes.bool.isRequired,
};

export default withStyles(s)(Navbar);
