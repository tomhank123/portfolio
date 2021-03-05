import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useScrollDirection } from 'hooks';

import { IconLogo } from 'components/Icons';
import ResumeButton from './ResumeButton';
import Wrapper from './Wrapper';
import Links from './Links';
import Nav from './Nav';

import config from './config';
import { loaderDelay } from './constants';

function Header({ isHome }) {
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
              <div className="logo" tabIndex={-1}>
                {isHome ? (
                  <a href="/" aria-label="home">
                    <IconLogo />
                  </a>
                ) : (
                  <Link to="/" aria-label="home">
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
                  <CSSTransition
                    key={url}
                    classNames={fadeDownClass}
                    timeout={timeout}
                  >
                    <li
                      key={url}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <Link to={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                <div
                  style={{
                    transitionDelay: `${
                      isHome ? config.navLinks.length * 100 : 0
                    }ms`,
                  }}
                >
                  <ResumeButton href="/resume.pdf">Resume</ResumeButton>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </Links>
      </Nav>
    </Wrapper>
  );
}

Header.propTypes = {
  isHome: Proptypes.bool,
};

export default Header;
