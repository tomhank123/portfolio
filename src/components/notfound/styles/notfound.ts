import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;

export const Title = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;

export const Subtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;

export const HomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;
