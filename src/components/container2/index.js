import React from 'react';

// const Container = styled.section`
// margin: 0 auto;
// max-width: 1350px;
// `;

const classes = {
  wrapper: 'my-0 mx-auto max-w-7xl',
}

function Container ({ children }) {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}
export default Container;
