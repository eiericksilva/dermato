import React from "react";
/*  */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
/*  */
import {
  Container,
  ContainerSlider,
  SlideComentarios,
} from "./ContainerComentarios.styles";
import iconLeft from "../../assets/iconLeft.png";
import iconRight from "../../assets/iconRight.png";
import CardComentario from "../CardComentario/CardComentario.component";

import { comments } from "../../mock.json";

const ContainerComentarios = () => {
  return (
    <>
      <Container>
        <h2>O que as nossas clientes dizem?</h2>
        <ContainerSlider>
          <button>
            <img src={iconLeft} alt="" />
          </button>
          <SlideComentarios>
            {comments.map((item, idx) => (
              <CardComentario
                key={idx}
                image={item.image.url}
                alt={item.image.alt}
                name={item.name}
                comment={item.comment}
              />
            ))}
          </SlideComentarios>
          <button>
            <img src={iconRight} alt="" />
          </button>
        </ContainerSlider>
      </Container>
    </>
  );
};

export default ContainerComentarios;
