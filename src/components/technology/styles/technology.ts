import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.lightNavy};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1rem;
`;

export const Inner = styled.div`
  text-align: center;
`;

export const Title = styled.h6`
  color: ${props => props.theme.colors.lightestSlate};
`;

export const Subtitle = styled.small`
  color: ${props => props.theme.colors.lightSlate};
`;
