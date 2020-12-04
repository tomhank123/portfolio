import styled from 'styled-components';

export const Container = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
`;

export const Overline = styled.h2`
  ${({ theme }) => theme.mixins.numberedHeading};
  display: block;
  margin-bottom: 20px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;

  &:before {
    bottom: 0;
    font-size: var(--fz-sm);
  }

  &:after {
    display: none;
  }
`;

export const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
`;

export const EmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
`;
