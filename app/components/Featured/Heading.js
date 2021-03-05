import styled from 'styled-components';

export default styled.h2`
  ${({ theme }) => theme.mixins.numberedHeading};
`;
