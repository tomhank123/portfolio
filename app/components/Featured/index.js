/**
 *
 * Featured
 *
 */

import projectData from 'fixtures/projects.json';
import React, { useEffect, useRef } from 'react';
import config from 'utils/config';
import sr from 'utils/sr';

import { Icon } from 'components/Icons';
import Content from './Content';
import Description from './Description';
import Heading from './Heading';
import Image from './Image';
import Links from './Links';
import Overline from './Overline';
import Project from './Project';
import TechList from './TechList';
import Title from './Title';
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
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover } = frontmatter;

            return (
              <Project
                key={title}
                // eslint-disable-next-line no-return-assign
                ref={el => (revealProjects.current[i] = el)}
              >
                <Content>
                  <Overline>Featured Project</Overline>
                  <Title>{title}</Title>
                  <Description dangerouslySetInnerHTML={{ __html: html }} />
                  <TechList>
                    {tech &&
                      tech.map(techItem => <li key={techItem}>{techItem}</li>)}
                  </TechList>
                  <Links>
                    {github && (
                      <a href={github} aria-label="GitHub Link">
                        <Icon name="GitHub" />
                      </a>
                    )}
                    {external && (
                      <a href={external} aria-label="External Link">
                        <Icon name="External" />
                      </a>
                    )}
                  </Links>
                </Content>
                <Image>
                  <a href={external || (github || '#')}>
                    <img src={cover} alt={title} className="img" />
                  </a>
                </Image>
              </Project>
            );
          })}
      </div>
      <Project />
    </Wrapper>
  );
}

export default Featured;
