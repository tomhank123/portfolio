import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

export const Prefix = styled.h1`
  margin: 0 0 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.mixins.bigHeading};
`;

export const Subtitle = styled.h3`
  ${({ theme }) => theme.mixins.bigHeading};

  margin-top: 10px;
  color: var(--slate);
  line-height: 0.9;
`;

export const Text = styled.p`
  margin: 20px 0 0;
  max-width: 500px;
`;

export const EmailLink = styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
`;
