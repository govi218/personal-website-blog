import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const classes = {
  wrapper: '-mx-120px mb-2',
};

const NonStretchedImage = props => {
  let normalizedProps = props
  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: "1000px", //props.fluid.presentationWidth,
        margin: "0 auto", // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

function FeaturedImage({ sizes }) {
  console.log(sizes);
  return (
    <div className={classes.wrapper}>
      <NonStretchedImage fluid={sizes} alt="" />
    </div>
  );
}

export default FeaturedImage;
