import React from "react";
import { Container, SlideComentarios } from "./ContainerComentarios.styles";
import iconLeft from "../../assets/iconLeft.png";
import iconRight from "../../assets/iconRight.png";
import Picture from "../../assets/picture.png";
import Picture2 from "../../assets/picture2.png";
import CardComentario from "../CardComentario/CardComentario.component";
import slider from "../../assets/slider.png";
const ContainerComentarios = () => {
  return (
    <Container>
      <h1>O que as nossas clientes dizem?</h1>
      <SlideComentarios>
        <button>
          <img src={iconLeft} alt="" />
        </button>
        <CardComentario
          image={Picture}
          name="Débora Souza"
          comment="Really good quality, lovely packaging & delivery. Love it!"
        />
        <CardComentario
          image={Picture2}
          name="Daiene Rodrigues"
          comment="Really good quality, lovely packaging & delivery. Love it!"
        />
        <button>
          <img src={iconRight} alt="" />
        </button>
      </SlideComentarios>
    </Container>
  );
};

export default ContainerComentarios;
