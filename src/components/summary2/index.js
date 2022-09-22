import React from 'react';

import FeaturedImage from '../featured-image2';
import Link from 'gatsby-link';

const classes = {
  wrapper: 'text-center py-10',
  image: 'slate-600 no-underline mb-20',
  name: 'font-serif text-4xl font-semibold text-gray-700 hover:text-indigo-900 pb-1',
  date: 'text-gray-600 block text-2xl m-0 text-center mb-10',
  description: 'text-gray-600 block text-2xl mt-50 mr-0 mb-5 ml-0 text-center',
  continue_reading: 'text-gray-600 inline-block mt-50 no-underline text-sm',
};

function Summary({date, title, excerpt, slug, image}) {
  return (
    <div className={classes.wrapper}>
      {image &&
       <Link className={classes.image} to={slug}>
         <FeaturedImage sizes={image.childImageSharp.sizes}/>
       </Link>
      }
      <h1 className={classes.name}><Link className={classes.link} to={slug}>{title}</Link></h1>
      <div className={classes.date}>{date}</div>
      <p className={classes.description}>{excerpt}</p>
      <Link className={classes.continue_reading} to={slug}>Continue Reading &rarr;</Link>
    </div>
  );
}

export default Summary;
