import React from 'react';

const classes = {
  wrapper: 'bg-white border border-solid border-slate-200 shadow-card mb-10 md:border-x-0 2xl:mx-48 md:px-15',
};

function Article ({ children }) {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

export default Article;
