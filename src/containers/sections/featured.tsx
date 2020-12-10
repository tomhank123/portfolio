import { Featured } from '@/components';
import { Icon } from '@/components/icons';
import projectData from '@/fixtures/projects.json';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const FeaturedContainer: FC<IProps> = (props: IProps) => {
  const projectsToShow = projectData.slice(0, 3);

  return (
    <Featured id='projects'>
      <Featured.Heading>Some Things I’ve Built</Featured.Heading>

      <div>
        {projectsToShow &&
          projectsToShow.map(({ title, github, html, external, technologies, cover }, i) => (
            <Featured.Project key={i}>
              <Featured.Content>
                <Featured.Overline>Featured Project</Featured.Overline>
                <Featured.Title>{title}</Featured.Title>
                <Featured.Description dangerouslySetInnerHTML={{ __html: html }}></Featured.Description>
                <Featured.TechList>
                  {technologies && technologies.map((tech, i) => <li key={i}>{tech}</li>)}
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
          ))}
      </div>
      <Featured.Project></Featured.Project>
    </Featured>
  );
};

export default FeaturedContainer;
