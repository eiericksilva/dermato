import React from "react";
import { CardContainer, Header, Bottom } from "./Card.styles";
import { Fade } from "react-awesome-reveal";

const Card = ({ image, title, description }) => {
  return (
    <CardContainer>
      <Fade>
        <Header>
          <img src={image} alt="" />
          <h1 id="title">{title}</h1>
        </Header>
        <Bottom>
          <p>{description}</p>
        </Bottom>
      </Fade>
    </CardContainer>
  );
};

export default Card;
