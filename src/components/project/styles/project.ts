import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.lightNavy};
  border-radius: ${props => props.theme.borderRadius};
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  & > .svg-inline--fa {
    color: ${props => props.theme.colors.green};
  }

  & > div {
    margin-left: auto;

    & > .svg-inline--fa {
      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.green};
      }
    }
  }
`;

export const Body = styled.div`
`;

export const Footer = styled.div`
  margin-top: auto;
  font-size: 0.8rem;
`;

export const Title = styled.h3`
  color: ${props => props.theme.colors.lightestSlate};
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.lightSlate};
`;
