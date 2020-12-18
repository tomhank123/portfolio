import PropTypes from 'prop-types';
import * as React from 'react';
import { Container, HamburgerButton, Sidebar } from './styles/menu';

interface MenuProps extends React.HTMLProps<HTMLElement> {
  show?: boolean;
}

interface MenuSidebarProps extends React.ComponentProps<'aside'> {
  menuOpen: boolean;
}

interface MenuHamburgerButtonProps extends React.ComponentProps<'button'> {
  menuOpen: boolean;
}

const defaultProps = {
  show: true,
};

const propTypes = {
  show: PropTypes.bool,
};

const MenuHamburgerButton = React.forwardRef<HTMLButtonElement, MenuHamburgerButtonProps>(
  ({ menuOpen, ...restProps }, ref) => <HamburgerButton menuOpen={menuOpen} {...restProps} ref={ref} />
);

const MenuSidebar = React.forwardRef<HTMLDivElement, MenuSidebarProps>(({ menuOpen, ...restProps }, ref) => (
  <Sidebar menuOpen={menuOpen} {...restProps} ref={ref} />
));

type Menu = React.ForwardRefExoticComponent<MenuProps> & {
  Sidebar: typeof MenuSidebar;
  HamburgerButton: typeof MenuHamburgerButton;
};

const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ children, id }: MenuProps, ref) => {
  return (
    <Container id={id} ref={ref}>
      {children}
    </Container>
  );
}) as Menu;

Menu.displayName = 'Menu';
Menu.defaultProps = defaultProps as any;
Menu.propTypes = propTypes;

Menu.HamburgerButton = MenuHamburgerButton;
Menu.Sidebar = MenuSidebar;

export default Menu;
