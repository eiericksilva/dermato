import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f1df;

  padding: 48px 140px;

  svg {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 950px) {
    svg {
      display: block;
    }
  }

  h1 {
    font-size: 1.2em;
    color: #644b2c;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  color: #644b2c;

  @media (max-width: 950px) {
    display: none;
  }

  li {
    text-transform: capitalize;
    padding: 0 20px;
    font-size: 1em;
  }
`;
