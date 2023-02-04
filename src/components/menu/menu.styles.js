import styled from "styled-components";

export const HeaderMenuContainer = styled.nav`
  color: #644b2c;
  font-size: 24px;
  font-weight: 700;
  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    display: flex;
    li {
      text-transform: capitalize;
    }
  }
`;
