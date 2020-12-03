import {} from 'styled-components';
import theme from '@/styles/theme';
import mixins from '@/styles/mixins';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}