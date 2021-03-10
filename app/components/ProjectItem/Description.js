import styled from 'styled-components';

export default styled.div`
  color: var(--light-slate);
  font-size: 17px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;
