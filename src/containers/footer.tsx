import { Footer } from '@/components';
import { Icon } from '@/components/icons';
import config from '@/config';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';

interface IProps {}

const FooterContainer: FC<IProps> = (props: IProps) => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }
    // fetch('https://api.github.com/repos/ductran-94-dev/portfolio')
    fetch('https://api.github.com/repos/bchiang7/v4')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <Footer>
      <Footer.SocialLinks>
        <ul>
          {config.socialMedia &&
            config.socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </Footer.SocialLinks>

      <Footer.Credit tabIndex={-1}>
        <a href='https://github.com/bchiang7/v4'>
          <div>Built by Duc Tran (Designed by Brittany Chiang)</div>

          {githubInfo.stars && githubInfo.forks && (
            <div className='github-stats'>
              <span>
                <Icon name='Star' />
                <span>{(githubInfo as any).stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name='Fork' />
                <span>{(githubInfo as any).forks.toLocaleString()}</span>
              </span>
            </div>
          )}
        </a>
      </Footer.Credit>
    </Footer>
  );
};

export default FooterContainer;
