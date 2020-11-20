import { TTheme } from '@/helpers';
import styled from 'styled-components';

export const Container = styled.div`
`;

export const Inner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Prefix = styled.h1`
  color: ${(props: TTheme) => props.theme.colors.green};
  margin: 0px 0px 10px 4px;
  font-weight: 400;
  font-size: clamp(14px, 5vw, 16px);
  line-height: 1.1;
`;

export const Title = styled.h2`
  color: ${(props: TTheme) => props.theme.colors.lightestSlate};
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);

  line-height: 1.1;
  font-weight: 600;
`;

export const Subtitle = styled.h3`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);

  margin-top: 10px;
  font-weight: 600;
`;

export const Text = styled.div`
  margin: 20px 0px 0px;
  max-width: 500px;
  margin-bottom: 1rem;
`;
