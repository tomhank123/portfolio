/**
 *
 * Project
 *
 */

import ProjectItem from 'components/ProjectItem';
import projectData from 'fixtures/projects.json';
import React, { useEffect, useRef, useState } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';
import ArchiveLink from './ArchiveLink';
import Grid from './Grid';
import Heading from './Heading';
import MoreButton from './MoreButton';
import Wrapper from './Wrapper';

const GRID_LIMIT = 6;

function Project() {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current, config.srConfig());
      sr.reveal(revealArchiveLink.current, config.srConfig());
      revealProjects.current.forEach(
        (ref, i) => sr && sr.reveal(ref, config.srConfig(i * 100)),
      );
    }
  }, []);

  const firstSix = projectData.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projectData : firstSix;

  return (
    <Wrapper id="projects">
      <Heading ref={revealTitle}>Other Noteworthy Projects</Heading>
      <ArchiveLink
        className="inline-link"
        to="/archive"
        ref={revealArchiveLink}
      >
        view the archive
      </ArchiveLink>

      <Grid>
        {projectsToShow &&
          projectsToShow.map(({ node }, i) => {
            const { frontmatter } = node;
            const { title } = frontmatter;

            return (
              <ProjectItem
                key={title}
                node={node}
                style={{
                  transitionDelay: `${
                    i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                  }ms`,
                }}
              />
            );
          })}
      </Grid>
      <MoreButton
        onClick={() => setShowMore(!showMore)}
        hidden={projectData.length <= GRID_LIMIT}
      >
        Show {showMore ? 'Less' : 'More'}
      </MoreButton>
    </Wrapper>
  );
}

export default Project;
