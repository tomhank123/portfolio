import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h2`
  font-size: clamp(24px, 5vw, var(--fz-heading));
`;

export const ArchiveLink = styled(Link)`
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  &:after {
    bottom: 0.1em;
  }
`;

export const MoreButton = styled.button`
  ${({ theme }) => theme.mixins.button};
  margin: 80px auto 0;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  position: relative;
  margin-top: 50px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const ItemInner = styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  ${({ theme }) => theme.mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  transition: var(--transition);
`;

export const Item = styled.div`
  cursor: default;
  transition: var(--transition);

  &:hover,
  &:focus {
    outline: 0;
    ${ItemInner} {
      transform: translateY(-5px);
    }
  }
`;

export const ItemTop = styled.div`
  ${({ theme }) => theme.mixins.flexBetween};
  margin-bottom: 30px;

  .folder {
    color: var(--green);
    svg {
      width: 40px;
      height: 40px;
    }
  }

  .project-links {
    margin-right: -10px;
    color: var(--light-slate);

    a {
      padding: 5px 10px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const ItemTitle = styled.h3`
  margin: 0 0 10px;
  color: var(--lightest-slate);
  font-size: var(--fz-xxl);
`;

export const ItemLinks = styled.div`
  margin-right: -10px;
  color: var(--light-slate);

  a {
    padding: 5px 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ItemDescription = styled.div`
  color: var(--light-slate);
  font-size: 17px;

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;

export const ItemTechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: 1.75;

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  }
`;
