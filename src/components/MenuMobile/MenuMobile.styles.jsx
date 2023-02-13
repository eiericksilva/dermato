import styled, { css } from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  opacity: 0;
  pointer-events: none;

  svg {
    cursor: pointer;
    position: absolute;
    top: 1.4rem;
    right: 5.9rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const Links = styled.nav`
  display: flex;
  flex-direction: column;
`;
