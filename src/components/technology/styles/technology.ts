import { TTheme } from '@/helpers';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props: TTheme) => props.theme.colors.lightNavy};
  border-radius: ${(props: TTheme) => props.theme.borderRadius};
  padding: 1rem;
`;

export const Inner = styled.div`
  text-align: center;
`;

export const Title = styled.h6`
  color: ${(props: TTheme) => props.theme.colors.lightestSlate};
`;

export const Subtitle = styled.small`
  color: ${(props: TTheme) => props.theme.colors.lightSlate};
`;
