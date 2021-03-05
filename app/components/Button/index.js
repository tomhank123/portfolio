/**
 *
 * Button
 *
 */

import styled from 'styled-components';

export default styled.button`
  ${({ theme }) => theme.mixins.button};
  ${(theme, ...props) => props.sm && theme.mixins.smallButton}
  ${(theme, ...props) => props.lg && theme.mixins.bigButton}
`;
