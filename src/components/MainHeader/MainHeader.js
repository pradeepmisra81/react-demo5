import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import './Styles.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <h2>Login</h2>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
