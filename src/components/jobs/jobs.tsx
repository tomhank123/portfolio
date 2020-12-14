import PropTypes from 'prop-types';
import * as React from 'react';
import { Container, Heading, Highlight, Inner, TabButton, TabContent, TabList } from './styles/jobs';

interface JobsProps extends React.HTMLProps<HTMLElement> {
  show?: boolean;
}

const defaultProps = {
  show: true,
};

const propTypes = {
  show: PropTypes.bool,
};

const JobsInner = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Inner {...restProps}>{children}</Inner>;
};

const JobsHeading = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Heading {...restProps}>{children}</Heading>;
};

const JobsTabList = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <TabList {...restProps}>{children}</TabList>;
};

const JobsTabContent = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <TabContent {...restProps}>{children}</TabContent>;
};

const JobsTabButton = ({
  isActive,
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { isActive: boolean }) => {
  return (
    <TabButton isActive={isActive} {...restProps}>
      {children}
    </TabButton>
  );
};

const JobsHighlight = ({
  activeTabId,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLElement> & { activeTabId: number }) => {
  return (
    <Highlight activeTabId={activeTabId} {...restProps}>
      {children}
    </Highlight>
  );
};

type Jobs = React.ForwardRefExoticComponent<JobsProps> & {
  Highlight: typeof JobsHighlight;
  Inner: typeof JobsInner;
  Heading: typeof JobsHeading;
  TabList: typeof JobsTabList;
  TabContent: typeof JobsTabContent;
  TabButton: typeof JobsTabButton;
};

const Jobs = React.forwardRef<HTMLDivElement, JobsProps>(({ children }: JobsProps, ref) => {
  return <Container ref={ref}>{children}</Container>;
}) as Jobs;

Jobs.displayName = 'Jobs';
Jobs.defaultProps = defaultProps as any;
Jobs.propTypes = propTypes;

Jobs.Highlight = JobsHighlight;
Jobs.Inner = JobsInner;
Jobs.Heading = JobsHeading;
Jobs.TabList = JobsTabList;
Jobs.TabContent = JobsTabContent;
Jobs.TabButton = JobsTabButton;

export default Jobs;
