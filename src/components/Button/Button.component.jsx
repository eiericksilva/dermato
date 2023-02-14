import React from "react";
import { ButtonContainer } from "./Button.styles";

const Button = ({ onClick, children }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
