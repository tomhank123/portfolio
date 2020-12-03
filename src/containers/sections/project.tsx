import { Grid, Project, Section } from '@/components';
import projectData from '@/fixtures/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const ProjectContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <div>
        <Section.Title prefix='07. '>My Projects</Section.Title>
        <Section.Body>
          <Grid sm={1} md={3} lg={3}>
            {projectData.map((project, index) => (
              <Grid.Item key={index}>
                <Project>
                  <Project.Header>
                    <FontAwesomeIcon icon={['fas', 'external-link-alt']} size='lg' />
                  </Project.Header>
                  <Project.Body>
                    <Project.Title>{project.title}</Project.Title>
                    <Project.Text>{project.body}</Project.Text>
                  </Project.Body>
                  <Project.Footer>
                    <ul className='list-inline'>
                      {project.technologies.map(technology => (
                        <li key={technology} className='list-inline-item'>{technology}</li>
                      ))}
                    </ul>
                  </Project.Footer>
                </Project>
              </Grid.Item>
            ))}
          </Grid>
          <p className='mt-3' style={{ color: '#64ffda'}}>View the archive </p>
        </Section.Body>
      </div>
    </Section>
  );
};

export default ProjectContainer;
