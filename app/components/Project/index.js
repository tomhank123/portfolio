/**
 *
 * Project
 *
 */

import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import config from 'utils/config';
import sr from 'utils/sr';
import projectData from 'fixtures/projects.json';

import ArchiveLink from './ArchiveLink';
import Wrapper from './Wrapper';
import Grid from './Grid';
import Heading from './Heading';
import Item from './Item';
import ItemDescription from './ItemDescription';
import ItemInner from './ItemInner';
import ItemLinks from './ItemLinks';
import ItemTechList from './ItemTechList';
import ItemTitle from './ItemTitle';
import ItemTop from './ItemTop';
import MoreButton from './MoreButton';

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

      <TransitionGroup component={null}>
        <Grid>
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, tech, github } = frontmatter;

              return (
                <CSSTransition
                  key={title}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <Item
                    key={title}
                    // eslint-disable-next-line no-return-assign
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex={0}
                    style={{
                      transitionDelay: `${
                        i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0
                      }ms`,
                    }}
                  >
                    <ItemInner>
                      <header>
                        <ItemTop>
                          <div className="folder">folder</div>
                          <ItemLinks>
                            {github && (
                              <a href={github} aria-label="GitHub Link">
                                GitHub
                              </a>
                            )}
                            {external && (
                              <a href={external} aria-label="External Link">
                                External
                              </a>
                            )}
                          </ItemLinks>
                        </ItemTop>
                        <ItemTitle>{title}</ItemTitle>
                        <ItemDescription
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      </header>
                      <footer>
                        <ItemTechList>
                          {tech.map(techItem => (
                            <li key={techItem}>{techItem}</li>
                          ))}
                        </ItemTechList>
                      </footer>
                    </ItemInner>
                  </Item>
                </CSSTransition>
              );
            })}
        </Grid>
        <MoreButton
          onClick={() => setShowMore(!showMore)}
          hidden={projectData.length <= GRID_LIMIT}
        >
          Show {showMore ? 'Less' : 'More'}
        </MoreButton>
      </TransitionGroup>
    </Wrapper>
  );
}

export default Project;
