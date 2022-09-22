import React from 'react';

const classes = {
  wrapper: 'relative lg:p-24 bg-gray-100',
  outerWrapper: 'relative',
};

const Layout = ({ children }) => {
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  );
};

export default Layout;
