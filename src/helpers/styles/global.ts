import { createGlobalStyle } from 'styled-components';
import { TTheme } from './helpers';

export const GlobalStyles = createGlobalStyle`
  :root {
    --navy: ${(props: TTheme) => props.theme.colors.navy};
    --slate: ${(props: TTheme) => props.theme.colors.slate};
  }

  body {
    background-color: var(--navy);
    color: var(--slate);
  }
`;
