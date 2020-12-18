import { Menu } from '@/components';
import config from '@/config';
import { useOnClickOutside } from '@/hooks';
import { KEY_CODES } from '@/utils';
import * as React from 'react';
import { FC, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

interface IProps {}

const MenuContainer: FC<IProps> = (props: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables: string | any[];
  let firstFocusableEl: unknown;
  let lastFocusableEl: unknown;

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from((navRef as any).current.querySelectorAll('a'))];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e: { preventDefault: () => void }) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      (lastFocusableEl as any).focus();
    }
  };

  const handleForwardTab = (e: { preventDefault: () => void }) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      (lastFocusableEl as any).focus();
    }
  };

  const onKeyDown = (e: { key: any; preventDefault: () => void; shiftKey: any }) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e: { currentTarget: { innerWidth: number } }) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize as any);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize as any);
    };
    // eslint-disable-next-line
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef as any, () => setMenuOpen(false));

  return (
    <Menu>
      <Helmet>
        <body className={menuOpen ? 'blur' : ''} />
      </Helmet>

      <div ref={wrapperRef as any}>
        <Menu.HamburgerButton onClick={toggleMenu} menuOpen={menuOpen} ref={buttonRef}>
          <div className='ham-box'>
            <div className='ham-box-inner' />
          </div>
        </Menu.HamburgerButton>

        <Menu.Sidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
          <nav ref={navRef}>
            {config.navLinks && (
              <ol>
                {config.navLinks.map(({ url, name }: any, i: string | number | null | undefined) => (
                  <li key={i}>
                    <Link to={url}>{name}</Link>
                  </li>
                ))}
              </ol>
            )}

            <a href='/resume.pdf' className='resume-link'>
              Resume
            </a>
          </nav>
        </Menu.Sidebar>
      </div>
    </Menu>
  );
};

export default MenuContainer;
