import React from "react";
import { CardContainer, Header, Bottom } from "./Card.styles";
import { Zoom } from "react-reveal";

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Zoom>
        <Header>
          <img src={image} alt="" />
          <h1 id="title">{title}</h1>
        </Header>
        <Bottom>
          <p>{description}</p>
        </Bottom>
      </Zoom>
    </CardContainer>
  );
};

export default Card;
