import styled from 'styled-components';

export default styled.a`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
`;
