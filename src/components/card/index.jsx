import React from 'react';

// import styled from 'styled-components';

// const Card = styled.div`
// background: #fff;
// border: 1px solid #e0e6ed;
// box-shadow: 0 1px 5px rgba(0,0,0,0.05);
// margin-bottom: 30px;
// padding: 75px 100px;

// @media only screen and (max-width: 870px) {
// border-left: none;
// border-right: none;
// padding: 75px 15px;
// }
// `;

const classes = {
  wrapper: 'bg-white border border-solid border-slate-200 shadow-card mb-30 py-75 px-100 md:border-x-0 md:px-15',
};

function Card({ children }) {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

export default Card;