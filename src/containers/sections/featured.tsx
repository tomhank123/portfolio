import { Featured } from '@/components';
import { Icon } from '@/components/icons';
import config from '@/config';
import projectData from '@/fixtures/projects.json';
import sr from '@/utils/sr';
import * as React from 'react';
import { FC, useEffect, useRef } from 'react';

interface IProps {}

const FeaturedContainer: FC<IProps> = (props: IProps) => {
  const projectsToShow = projectData.slice(0, 3);

  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  useEffect(() => {
    if (sr) {
      sr.reveal((revealTitle as any).current, config.srConfig());
      revealProjects.current.forEach((ref, i) => sr && sr.reveal(ref, config.srConfig(i * 100)));
    }
  }, []);

  return (
    <Featured id='projects'>
      <Featured.Heading ref={revealTitle}>Some Things I’ve Built</Featured.Heading>

      <div>
        {projectsToShow &&
          projectsToShow.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <Featured.Project key={i} ref={(el) => ((revealProjects as any).current[i] = el)}>
                <Featured.Content>
                  <Featured.Overline>Featured Project</Featured.Overline>
                  <Featured.Title>{title}</Featured.Title>
                  <Featured.Description dangerouslySetInnerHTML={{ __html: html }}></Featured.Description>
                  <Featured.TechList>
                    {tech && tech.map((techItem, i) => <li key={i}>{techItem}</li>)}
                  </Featured.TechList>
                  <Featured.Links>
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
                  </Featured.Links>
                </Featured.Content>
                <Featured.Image>
                  <a href={external ? external : github ? github : '#'}>
                    <img src={cover} alt={title} className='img' />
                  </a>
                </Featured.Image>
              </Featured.Project>
            );
          })}
      </div>
      <Featured.Project></Featured.Project>
    </Featured>
  );
};

export default FeaturedContainer;
