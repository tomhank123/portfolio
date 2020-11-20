import styled from 'styled-components';

export const Container = styled.div<React.HTMLAttributes<HTMLElement> & { sm: number; md: number; lg: number; }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.sm}, minmax(0, 1fr));
  grid-column-gap: 12px;
  grid-row-gap: 12px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(${(props) => props.md}, minmax(0, 1fr));
  }

  @media (min-width: 972px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    grid-template-columns: repeat(${(props) => props.lg}, minmax(0, 1fr));
  }
`;

export const Item = styled.div``;
