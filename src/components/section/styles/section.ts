import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 3rem;
  margin-top: 3rem;
`;

export const Prefix = styled.small`
  font-size: 75%;
  color: ${props => props.theme.colors.green};
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.lightestSlate};
  font-size: 1.5rem;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 2rem;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 0.8px;
    background-color: ${props => props.theme.colors.lightestNavy};
  }
  &::after {
    flex: 1;
    margin-left: 0.5rem;
  }

  ${Prefix} {
    margin-right: 0.5rem;
  }
`;

export const Body = styled.div`
`;