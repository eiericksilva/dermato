import styled from "styled-components";

export const All = styled.div`
  background-color: #ffccd1;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 10px auto;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffccd1;
  align-items: center;

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
