import * as React from 'react';
import { Container } from './styles/table';
import PropTypes from 'prop-types';

interface TableProps extends React.HTMLProps<HTMLElement> {
  show?: boolean;
}

const defaultProps = {
  show: true,
};

const propTypes = {
  show: PropTypes.bool,
};

type Table = React.ForwardRefExoticComponent<TableProps> & {};

const Table = React.forwardRef<HTMLDivElement, TableProps>((uncontrolledProps: TableProps, ref) => {
  const { children } = uncontrolledProps;

  return <Container ref={ref}>{children}</Container>;
}) as Table;

Table.displayName = 'Table';
Table.defaultProps = defaultProps as any;
Table.propTypes = propTypes;

export default Table;
