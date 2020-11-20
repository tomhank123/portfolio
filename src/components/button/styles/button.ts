import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Container = styled(Button)`
  background-color: ${(props) => props.theme.colors.navy};
  border-color: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.green};
`;
