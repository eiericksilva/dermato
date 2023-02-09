import React from "react";
import { Column, NumbersContainer } from "./Numbers.styles";

const Numbers = () => {
  return (
    <NumbersContainer id="sobre">
      <Column>
        <h2>+3.000</h2>
        <p>Clientes satisfeitas</p>
      </Column>
      <hr />
      <Column>
        <h2>+15</h2>
        <p>Anos de experiência</p>
      </Column>
      <hr />
      <Column>
        <h2>+10</h2>
        <p>Filiais</p>
      </Column>
    </NumbersContainer>
  );
};

export default Numbers;
