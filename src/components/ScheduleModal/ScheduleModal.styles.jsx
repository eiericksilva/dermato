import styled, { css } from "styled-components";

export const Container = styled.div`
  opacity: 0;
  pointer-events: none;
  overflow-y: scroll;

  position: absolute;
  top: 0;
  left: auto;
  width: 100%;
  height: 100%;
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
      z-index: 10000;
    `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    padding: 10px 0;
  }

  fieldset {
    border: 1px solid #f9637c;
  }

  input[type="text"],
  input[type="date"],
  input[type="time"] {
    border: 1px solid #f9637c;
    margin-top: 5px;
    margin-bottom: 25px;
    width: 30%;
    height: 30px;
    padding: 20px;

    &:hover {
      cursor: pointer;
    }

    position: relative;
  }

  button {
    border: 1px solid #f9637c;
    width: 50%;
    height: 30px;
    margin: 50px auto;

    &:hover {
      cursor: pointer;
      background-color: #f9637c;
      color: #fff;
      transition: 0.3s;
    }
  }
`;

export const ErrorMessage = styled.span`
  position: relative;
  top: 33px;
  right: 430px;

  color: #ff0000;
  font-size: 12px;
`;
