import React from "react";
import { CardContainer, Header, Bottom } from "./Card.styles";

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Header>
        <img src={image} alt="" />
        <h1 id="title">{title}</h1>
      </Header>
      <Bottom>
        <p>{description}</p>
      </Bottom>
    </CardContainer>
  );
};

export default Card;
