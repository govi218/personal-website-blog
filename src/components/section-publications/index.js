import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionPublications = ({ publications }) => {
  if (!publications.length) return null;

  return (
    <Section title="Publications">
      {publications.map((publication) => (
        <SummaryItem
          key={publication.title}
          name={publication.title}
          description={publication.journal}
          link={publication.link}
        />
      ))}
    </Section>
  );
};

export default SectionPublications;
