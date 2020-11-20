import { TTheme } from '@/helpers';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
  border: 20px solid ${(props: TTheme) => props.theme.colors.lightNavy};
  margin-bottom: 1.5rem;
`;

export const Title = styled.h3`
  color: ${(props: TTheme) => props.theme.colors.lightestSlate};
`;

export const Subtitle = styled.h6`
  margin-top: auto;
  color: ${(props: TTheme) => props.theme.colors.lightSlate};
`;

export const Button = styled.h6`
`;
