import { Project } from '@/components';
import { Icon } from '@/components/icons';
import { GRID_LIMIT } from '@/constants';
import projectData from '@/fixtures/projects.json';
import * as React from 'react';
import { FC, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface IProps {}

const ProjectContainer: FC<IProps> = (props: IProps) => {
  const [showMore, setShowMore] = useState(false);

  const firstSix = projectData.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projectData : firstSix;

  return (
    <Project>
      <Project.Heading>Other Noteworthy Projects</Project.Heading>
      <Project.ArchiveLink className='inline-link' to='/archive'>
        view the archive
      </Project.ArchiveLink>

      <TransitionGroup component={null}>
        <Project.Grid>
          {projectsToShow &&
            projectsToShow.map(({ title, technologies, github, external, html }, i) => {
              return (
                <CSSTransition
                  key={i}
                  classNames='fadeup'
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}
                >
                  <Project.Item
                    key={i}
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
                          {technologies.map((tech, i) => (
                            <li key={i}>{tech}</li>
                          ))}
                        </Project.ItemTechList>
                      </footer>
                    </Project.ItemInner>
                  </Project.Item>
                </CSSTransition>
              );
            })}
        </Project.Grid>
        <Project.MoreButton onClick={() => setShowMore(!showMore)}>
          Show {showMore ? 'Less' : 'More'}
        </Project.MoreButton>
      </TransitionGroup>
    </Project>
  );
};

export default ProjectContainer;
