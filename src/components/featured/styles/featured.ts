import styled from 'styled-components';

export const Container = styled.section``;

export const Heading = styled.h2`
  ${({ theme }) => theme.mixins.numberedHeading};
`;

export const Content = styled.div`
  position: relative;
  grid-column: 1 / 7;
  grid-row: 1 / -1;

  @media (max-width: 1080px) {
    grid-column: 1 / 9;
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 40px 40px 30px;
    z-index: 5;
  }

  @media (max-width: 480px) {
    padding: 30px 25px 20px;
  }
`;

export const Overline = styled.p`
  margin: 10px 0;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;

export const Title = styled.h3`
  color: var(--lightest-slate);
  font-size: clamp(24px, 5vw, 28px);

  @media (min-width: 768px) {
    margin: 0 0 20px;
  }

  @media (max-width: 768px) {
    color: var(--white);
  }
`;

export const Description = styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-lg);

  @media (max-width: 768px) {
    padding: 20px 0;
    background-color: transparent;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }

  a {
    ${({ theme }) => theme.mixins.inlineLink};
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0 10px;
  padding: 0;
  list-style: none;

  li {
    margin: 0 20px 5px 0;
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    margin: 10px 0;

    li {
      margin: 0 10px 5px 0;
      color: var(--lightest-slate);
    }
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: var(--lightest-slate);
  a {
    padding: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Image = styled.div`
  ${({ theme }) => theme.mixins.boxShadow};
  grid-column: 6 / -1;
  grid-row: 1 / -1;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 100%;
    opacity: 0.25;
  }

  a {
    width: 100%;
    background-color: var(--green);
    border-radius: var(--border-radius);
    vertical-align: middle;

    &:hover,
    &:focus {
      background: transparent;

      &:before,
      .img {
        background: transparent;
        filter: none;
      }
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      transition: var(--transition);
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
  }

  .img {
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1) brightness(90%);
    max-width: 100%;

    @media (max-width: 768px) {
      object-fit: cover;
      width: auto;
      height: 100%;
      filter: grayscale(100%) contrast(1) brightness(80%);
    }
  }
`;

export const Project = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    ${Content} {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }

    ${TechList} {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }

    ${Links} {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }

    ${Image} {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }
`;
