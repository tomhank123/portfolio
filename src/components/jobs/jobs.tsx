import * as React from 'react';
import { Container, Inner, Heading, TabList, TabContent, TabButton, Highlight } from './styles/jobs';

const Jobs = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Container {...restProps}>{children}</Container>;
};

Jobs.Inner = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Inner {...restProps}>{children}</Inner>;
};

Jobs.Heading = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <Heading {...restProps}>{children}</Heading>;
};

Jobs.TabList = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <TabList {...restProps}>{children}</TabList>;
};

Jobs.TabContent = ({ children, ...restProps }: React.HTMLAttributes<HTMLElement>) => {
  return <TabContent {...restProps}>{children}</TabContent>;
};

Jobs.TabButton = ({
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

Jobs.Highlight = ({
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

export default Jobs;
