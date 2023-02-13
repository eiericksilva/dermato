import React from "react";
import { Left, Right, WrapperComentario } from "./CardComentario.styles";
import stars from "../../assets/Group.png";
import { Fade } from "react-awesome-reveal";
const CardComentario = ({ image, name, comment }) => {
  return (
    <Fade>
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
    </Fade>
  );
};

export default CardComentario;
