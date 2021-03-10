/**
 *
 * Featured
 *
 */

import FeaturedItem from 'components/FeaturedItem';
import projectData from 'fixtures/projects.json';
import React, { useEffect, useRef } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';
import Heading from './Heading';
import Wrapper from './Wrapper';

function Featured() {
  const projectsToShow = projectData.slice(0, 3);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current, config.srConfig());
      revealProjects.current.forEach(
        (ref, i) => sr && sr.reveal(ref, config.srConfig(i * 100)),
      );
    }
  }, []);

  return (
    <Wrapper id="projects">
      <Heading ref={revealTitle}>Some Things I’ve Built</Heading>
      <div>
        {projectsToShow &&
          projectsToShow.map(({ node }, i) => {
            const { frontmatter } = node;
            const { title } = frontmatter;

            return (
              <FeaturedItem
                key={title}
                node={node}
                // eslint-disable-next-line no-return-assign
                ref={el => (revealProjects.current[i] = el)}
              />
            );
          })}
      </div>
    </Wrapper>
  );
}

export default Featured;
