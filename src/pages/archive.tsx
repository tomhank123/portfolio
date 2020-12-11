import { Table } from '@/components';
import { Icon } from '@/components/icons';
import {
  LayoutContainer
} from '@/containers';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import projects from '@/fixtures/archive.json';
import { useEffect, useRef } from 'react';
import sr from '@/utils/sr';
import config from '@/config';

const ArchivePage = () => {
  const revealTitle = useRef<any>(null);
  const revealTable = useRef<any>(null);
  const revealProjects = useRef<any[]>([]);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealTitle.current as any, config.srConfig());
      sr.reveal(revealTable.current  as any, config.srConfig(200, 0));
      revealProjects.current.forEach((ref, i) => sr && sr.reveal(ref  as any, config.srConfig(i * 10)));
    }
  }, []);

  return (
    <LayoutContainer>
      <Helmet title='Archive' />

      <main>
        <header ref={revealTitle}>
          <h1 className='big-heading'>Archive</h1>
          <p className='subtitle'>A big list of things I’ve worked on</p>
        </header>

        <Table>
          <table ref={revealTable}>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className='hide-on-mobile'>Made at</th>
                <th className='hide-on-mobile'>Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.length > 0 &&
                projects.map(({ node }, i) => {
                  const {
                    date,
                    github,
                    external,
                    ios,
                    android,
                    title,
                    tech,
                    company,
                  } = node.frontmatter;
                  return (
                    <tr key={i} ref={el => (revealProjects.current[i] = el)}>
                      <td className='overline year'>{`${new Date(date).getFullYear()}`}</td>

                      <td className='title'>{title}</td>

                      <td className='company hide-on-mobile'>
                        {company ? <span>{company}</span> : <span>—</span>}
                      </td>

                      <td className='tech hide-on-mobile'>
                        {tech.length > 0 &&
                          tech.map((item, i) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== tech.length - 1 && <span className='separator'>&middot;</span>}
                            </span>
                          ))}
                      </td>

                      <td className='links'>
                        <div>
                          {external && (
                            <a href={external} aria-label='External Link'>
                              <Icon name='External' />
                            </a>
                          )}
                          {github && (
                            <a href={github} aria-label='GitHub Link'>
                              <Icon name='GitHub' />
                            </a>
                          )}
                          {ios && (
                            <a href={ios} aria-label='Apple App Store Link'>
                              <Icon name='AppStore' />
                            </a>
                          )}
                          {android && (
                            <a href={android} aria-label='Google Play Store Link'>
                              <Icon name='PlayStore' />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </Table>
      </main>
    </LayoutContainer>
  );
};

export default ArchivePage;
