import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e4d0b4;
  align-items: center;
  max-width: 100%;

  h2 {
    margin-top: 20px;
  }
`;
export const ContainerSlider = styled.div`
  display: flex;
  background-color: #e4d0b4;
  min-height: 400px;
  padding: 30px;
  justify-content: center;
  align-items: center;

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SlideComentarios = styled.div`
  display: flex;
  min-width: 80%;
  max-width: 100%;
  justify-content: space-around;

  @media (max-width: 1015px) {
    flex-direction: column;
    min-width: auto;

    button {
      display: none;
    }
  }
`;
