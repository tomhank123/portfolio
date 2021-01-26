import { IconLogo } from '@/components/icons';
import Menu from '@/components/menu';
import config from '@/config';
import { useScrollDirection } from '@/hooks';
import { loaderDelay } from '@/utils';
import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Links from './Links';
import Nav from './Nav';
import ResumeButton from './ResumeButton';
import Wrapper from './Wrapper';

interface IProps {
  isHome: boolean;
}

const HeaderContainer: FC<IProps> = ({ isHome }: IProps) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  return (
    <Wrapper scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
      <Nav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <div className='logo' tabIndex={-1}>
                {isHome ? (
                  <a href='/' aria-label='home'>
                    <IconLogo />
                  </a>
                ) : (
                  <Link to='/' aria-label='home'>
                    <IconLogo />
                  </Link>
                )}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <Links>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                config.navLinks &&
                config.navLinks.map(({ url, name }, i) => (
                  <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                    <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div style={{ transitionDelay: `${isHome ? config.navLinks.length * 100 : 0}ms` }}>
                  <ResumeButton href='/resume.pdf'>Resume</ResumeButton>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Links>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={timeout}>
              <Menu />
            </CSSTransition>
          )}
        </TransitionGroup>
      </Nav>
    </Wrapper>
  );
};

export default HeaderContainer;
