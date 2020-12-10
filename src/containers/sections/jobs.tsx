import { Jobs } from '@/components';
import jobsData from '@/fixtures/jobs.json';
import * as React from 'react';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface IProps {}

const JobsContainer: FC<IProps> = (props: IProps) => {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  return (
    <Jobs id='jobs'>
      <Jobs.Heading>Where I’ve Worked</Jobs.Heading>
      <Jobs.Inner>
        <Jobs.TabList role='tablist' aria-label='Job tabs'>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;

              return (
                <li key={i}>
                  <Jobs.TabButton isActive={activeTabId === i} onClick={() => setActiveTabId(i)}>
                    {company}
                  </Jobs.TabButton>
                </li>
              );
            })}
          <Jobs.Highlight activeTabId={activeTabId} />
        </Jobs.TabList>

        {jobsData &&
          jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;

            return (
              <CSSTransition key={i} in={activeTabId === i} timeout={250} classNames='fade'>
                <Jobs.TabContent hidden={activeTabId !== i} key={i}>
                  <h3>
                    <span>{title}</span>
                    <span className='company'>
                      &nbsp;@&nbsp;
                      <a href={url} target='_blank' rel='noopener noreferrer' className='inline-link'>
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className='range'>{range}</p>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </Jobs.TabContent>
              </CSSTransition>
            );
          })}
      </Jobs.Inner>
    </Jobs>
  );
};

export default JobsContainer;
