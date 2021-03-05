/* eslint-disable react/no-danger */
/**
 *
 * Jobs
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import config from 'utils/config';
import sr from 'utils/sr';
import jobsData from 'fixtures/jobs.json';

import Wrapper from './Wrapper';
import Heading from './Heading';
import Highlight from './Highlight';
import Inner from './Inner';
import TabButton from './TabButton';
import TabContent from './TabContent';
import TabList from './TabList';

function Jobs() {
  const [activeTabId, setActiveTabId] = useState(0);

  const revealContainer = useRef(null);

  useEffect(() => {
    if (sr) {
      sr.reveal(revealContainer.current, config.srConfig());
    }
  }, []);

  return (
    <Wrapper id="jobs" ref={revealContainer}>
      <Heading>Where I’ve Worked</Heading>
      <Inner>
        <TabList role="tablist" aria-label="Job tabs">
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter;

              return (
                <li key={`${company}`}>
                  <TabButton
                    isActive={activeTabId === i}
                    onClick={() => setActiveTabId(i)}
                  >
                    {company}
                  </TabButton>
                </li>
              );
            })}
          <Highlight activeTabId={activeTabId} />
        </TabList>

        {jobsData &&
          jobsData.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { title, url, company, range } = frontmatter;

            return (
              <CSSTransition
                key={url}
                in={activeTabId === i}
                timeout={250}
                classNames="fade"
              >
                <TabContent hidden={activeTabId !== i} key={url}>
                  <h3>
                    <span>{title}</span>
                    <span className="company">
                      &nbsp;@&nbsp;
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-link"
                      >
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className="range">{range}</p>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                </TabContent>
              </CSSTransition>
            );
          })}
      </Inner>
    </Wrapper>
  );
}

export default Jobs;
