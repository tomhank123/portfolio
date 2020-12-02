import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  color: var(--warning);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
`;

export const Item = styled.li`
  padding: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const Link = styled.a`
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;
