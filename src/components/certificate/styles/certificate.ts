import { TTheme } from '@/helpers';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props: TTheme) => props.theme.colors.lightNavy};
  border-radius: ${(props: TTheme) => props.theme.borderRadius};
  padding: 1rem;

  height: 100%;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;
`;

export const Title = styled.h6`
  color: ${(props: TTheme) => props.theme.colors.lightestSlate};
`;

export const Subtitle = styled.small`
  margin-top: auto;
  color: ${(props: TTheme) => props.theme.colors.lightSlate};
`;
