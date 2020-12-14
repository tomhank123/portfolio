import PropTypes from 'prop-types';
import * as React from 'react';
import { LinkProps } from 'react-router-dom';
import {
  ArchiveLink,
  Container,
  Grid,
  Heading,
  Item,
  ItemDescription,
  ItemInner,
  ItemLinks,
  ItemTechList,
  ItemTitle,
  ItemTop,
  MoreButton,
} from './styles/project';

interface ProjectProps extends React.HTMLProps<HTMLElement> {
  show?: boolean;
}

const defaultProps = {
  show: true,
};

const propTypes = {
  show: PropTypes.bool,
};

const ProjectHeading = React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h2'>>((restProps, ref) => (
  <Heading {...restProps} ref={ref} />
));

const ProjectArchiveLink = React.forwardRef<HTMLAnchorElement, LinkProps>((restProps, ref) => (
  <ArchiveLink {...restProps} ref={ref} />
));

const ProjectMoreButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>((restProps, ref) => (
  <MoreButton {...restProps} ref={ref} />
));

const ProjectGrid = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <Grid {...restProps} ref={ref} />
));

const ProjectItem = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <Item {...restProps} ref={ref} />
));

const ProjectItemDescription = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <ItemDescription {...restProps} ref={ref} />
));

const ProjectItemLinks = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <ItemLinks {...restProps} ref={ref} />
));

const ProjectItemInner = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <ItemInner {...restProps} ref={ref} />
));

const ProjectItemTechList = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>((restProps, ref) => (
  <ItemTechList {...restProps} ref={ref} />
));

const ProjectItemTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h3'>>((restProps, ref) => (
  <ItemTitle {...restProps} ref={ref} />
));

const ProjectItemTop = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <ItemTop {...restProps} ref={ref} />
));

type Project = React.ForwardRefExoticComponent<ProjectProps> & {
  ArchiveLink: typeof ProjectArchiveLink;
  Grid: typeof ProjectGrid;
  Heading: typeof ProjectHeading;
  Item: typeof ProjectItem;
  ItemDescription: typeof ProjectItemDescription;
  ItemInner: typeof ProjectItemInner;
  ItemTechList: typeof ProjectItemTechList;
  ItemTitle: typeof ProjectItemTitle;
  ItemTop: typeof ProjectItemTop;
  MoreButton: typeof ProjectMoreButton;
  ItemLinks: typeof ProjectItemLinks;
};

const Project = React.forwardRef<HTMLDivElement, ProjectProps>(({ children, id }: ProjectProps, ref) => {
  return <Container id={id} ref={ref}>{children}</Container>;
}) as Project;

Project.displayName = 'Project';
Project.defaultProps = defaultProps as any;
Project.propTypes = propTypes;

Project.ArchiveLink = ProjectArchiveLink;
Project.Grid = ProjectGrid;
Project.Heading = ProjectHeading;
Project.Item = ProjectItem;
Project.ItemDescription = ProjectItemDescription;
Project.ItemInner = ProjectItemInner;
Project.ItemTechList = ProjectItemTechList;
Project.ItemTitle = ProjectItemTitle;
Project.ItemTop = ProjectItemTop;
Project.MoreButton = ProjectMoreButton;
Project.ItemLinks = ProjectItemLinks;

export default Project;
