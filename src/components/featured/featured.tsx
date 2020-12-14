import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Container,
  Content,
  Description,
  Heading,
  Image,
  Links,
  Overline,
  Project,
  TechList,
  Title,
} from './styles/featured';

interface FeaturedProps extends React.HTMLProps<HTMLElement> {
  show?: boolean;
}

const defaultProps = {
  show: true,
};

const propTypes = {
  show: PropTypes.bool,
};

const FeaturedHeading = React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h2'>>((restProps, ref) => (
  <Heading {...restProps} ref={ref} />
));

const FeaturedProject = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>((restProps, ref) => (
  <Project {...restProps} ref={ref} />
));

const FeaturedContent = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Content {...restProps}>{children}</Content>;
};

const FeaturedOverline = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Overline {...restProps}>{children}</Overline>;
};

const FeaturedTitle = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Title {...restProps}>{children}</Title>;
};

const FeaturedDescription = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Description {...restProps}>{children}</Description>;
};

const FeaturedTechList = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <TechList {...restProps}>{children}</TechList>;
};

const FeaturedLinks = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Links {...restProps}>{children}</Links>;
};

const FeaturedImage = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Image {...restProps}>{children}</Image>;
};

type Featured = React.ForwardRefExoticComponent<FeaturedProps> & {
  Content: typeof FeaturedContent;
  Description: typeof FeaturedDescription;
  Heading: typeof FeaturedHeading;
  Image: typeof FeaturedImage;
  Links: typeof FeaturedLinks;
  Overline: typeof FeaturedOverline;
  Project: typeof FeaturedProject;
  TechList: typeof FeaturedTechList;
  Title: typeof FeaturedTitle;
};

const Featured = React.forwardRef<HTMLDivElement, FeaturedProps>(({ children, id }: FeaturedProps, ref) => {
  return <Container id={id} ref={ref}>{children}</Container>;
}) as Featured;

Featured.displayName = 'Featured';
Featured.defaultProps = defaultProps as any;
Featured.propTypes = propTypes;

Featured.Content = FeaturedContent;
Featured.Description = FeaturedDescription;
Featured.Heading = FeaturedHeading;
Featured.Image = FeaturedImage;
Featured.Links = FeaturedLinks;
Featured.Overline = FeaturedOverline;
Featured.Project = FeaturedProject;
Featured.TechList = FeaturedTechList;
Featured.Title = FeaturedTitle;

export default Featured;
