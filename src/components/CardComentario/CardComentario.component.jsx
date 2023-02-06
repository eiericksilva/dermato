import React from "react";
import { Left, Right, WrapperComentario } from "./CardComentario.styles";
import stars from "../../assets/Group.png";
const CardComentario = ({ image, name, comment }) => {
  return (
    <WrapperComentario>
      <Left>
        <img src={image} alt="" />
      </Left>
      <Right>
        <h1>{name}</h1>
        <hr />
        <p>{comment}</p>
        <img src={stars} alt="estrelas" />
      </Right>
    </WrapperComentario>
  );
};

export default CardComentario;
