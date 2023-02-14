import styled, { css } from "styled-components";

export const Container = styled.div`
  opacity: 0;
  pointer-events: none;
  overflow-y: hidden;

  position: absolute;
  top: 0;
  left: auto;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 30px;

  backdrop-filter: blur(90px);
  border-radius: 15px;

  display: flex;
  flex-direction: column;

  hr {
    margin: 20px 0;
    border: 1px solid red;
    opacity: 0.2;
  }

  h2 {
    margin: 0;
  }

  .closeCircle {
    position: absolute;
    top: 30px;
    right: 30px;
    &:hover {
      cursor: pointer;
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    padding: 20px 0;
  }

  fieldset {
    border: 1px solid #f9637c;
  }

  input[type="text"],
  input[type="date"],
  input[type="time"] {
    border: 1px solid #f9637c;
    margin: 10px;
    width: 30%;
    height: 30px;

    padding: 20px;
  }

  input[type="radio"] {
    margin: 10px;
  }

  button {
    border: none;
    width: 50%;
    height: 30px;
    margin: 20px auto;

    &:hover {
      cursor: pointer;
      background-color: #f9637c;
      color: #fff;
      transition: 0.3s;
    }
  }
`;
