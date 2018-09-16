import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import cx from 'classnames';

import LOGO from 'common/images/logo.svg';

import layoutStyles from 'common/styles/layout.scss';
import styles from './styles.scss';

const Header = () => (
  <div className={styles.header}>
    <div className={cx(layoutStyles.container, styles.nav)}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={LOGO} alt="Hostmaker Logo" />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={styles.active}>List</NavLink>
        </li>
        <li>
          <NavLink to="/map" exact activeClassName={styles.active}>Map</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
