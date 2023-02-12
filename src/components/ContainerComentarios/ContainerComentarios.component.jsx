import React from "react";
/*  */
import "./Swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
/*  */
import {
  All,
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
    <All>
      <h2>O que as nossas clientes dizem?</h2>
      <Container>
        <Swiper
          breakpoints={{
            1500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination]}
          loop="true"
          grabCursor="true"
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          navigation
        >
          {comments.map((item, idx) => (
            <SwiperSlide>
              <CardComentario
                key={idx}
                image={item.image.url}
                alt={item.image.alt}
                name={item.name}
                comment={item.comment}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </All>
  );
};

export default ContainerComentarios;
