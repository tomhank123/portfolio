import styled from 'styled-components/macro';

export const Container = styled.button`
  background-color: ${props => props.theme.colors.navy};
  border-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.green};
`;
