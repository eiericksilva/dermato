import styled from "styled-components";

export const Container = styled.div`
  background-color: #e4d0b4;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #dc2428;
    padding: 80px;
  }
`;

export const SlideComentarios = styled.div`
  display: flex;
  justify-content: space-around;

  button {
    background-color: transparent;
    border: none;
    padding: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;
