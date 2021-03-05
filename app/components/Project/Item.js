import styled from 'styled-components';

export default styled.div`
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;

    /* ${ItemInner} {
      transform: translateY(-5px);
    } */
  }
`;
