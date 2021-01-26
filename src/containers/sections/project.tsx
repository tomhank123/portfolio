import { Project } from '@/components';
import { Icon } from '@/components/icons';
import config from '@/config';
import { GRID_LIMIT } from './constants';
import projectData from '@/fixtures/projects.json';
import sr from '@/utils/sr';
import * as React from 'react';
import { FC, useEffect, useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface IProps {}

const ProjectContainer: FC<IProps> = (props: IProps) => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current as any, config.srConfig());
      sr.reveal(revealArchiveLink.current as any, config.srConfig());
      revealProjects.current.forEach((ref, i) => sr && sr.reveal(ref, config.srConfig(i * 100)));
    }
  }, []);

  const firstSix = projectData.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projectData : firstSix;

  return (
    <Project id='projects'>
      <Project.Heading ref={revealTitle}>Other Noteworthy Projects</Project.Heading>
      <Project.ArchiveLink className='inline-link' to='/archive' ref={revealArchiveLink}>
        view the archive
      </Project.ArchiveLink>

      <TransitionGroup component={null}>
        <Project.Grid>
          {projectsToShow &&
            projectsToShow.map(({ node }, i) => {
              const { frontmatter, html } = node;
              const { external, title, tech, github } = frontmatter;

              return (
                <CSSTransition
                  key={i}
                  classNames='fadeup'
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <Project.Item
                    key={i}
                    ref={el => ((revealProjects as any).current[i] = el)}
                    tabIndex={0}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}
                  >
                    <Project.ItemInner>
                      <header>
                        <Project.ItemTop>
                          <div className='folder'>
                            <Icon name='folder' />
                          </div>
                          <Project.ItemLinks>
                            {github && (
                              <a href={github} aria-label='GitHub Link'>
                                <Icon name='GitHub' />
                              </a>
                            )}
                            {external && (
                              <a href={external} aria-label='External Link'>
                                <Icon name='External' />
                              </a>
                            )}
                          </Project.ItemLinks>
                        </Project.ItemTop>
                        <Project.ItemTitle>{title}</Project.ItemTitle>
                        <Project.ItemDescription dangerouslySetInnerHTML={{ __html: html }}></Project.ItemDescription>
                      </header>
                      <footer>
                        <Project.ItemTechList>
                          {tech.map((techItem, i) => (
                            <li key={i}>{techItem}</li>
                          ))}
                        </Project.ItemTechList>
                      </footer>
                    </Project.ItemInner>
                  </Project.Item>
                </CSSTransition>
              );
            })}
        </Project.Grid>
        <Project.MoreButton onClick={() => setShowMore(!showMore)} hidden={projectData.length <= GRID_LIMIT}>
          Show {showMore ? 'Less' : 'More'}
        </Project.MoreButton>
      </TransitionGroup>
    </Project>
  );
};

export default ProjectContainer;
