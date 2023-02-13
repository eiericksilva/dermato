import React from "react";
import {
  ContainerFooter,
  ContainerIcons,
  Direitos,
  Left,
  Middle,
  Right,
} from "./Footer.styles";
import Insta from "../../assets/Insta.png";
import Face from "../../assets/Face.png";
import Youtube from "../../assets/Youtube.png";

const Footer = () => {
  return (
    <>
      <ContainerFooter id="contato">
        <Left>
          <h1>DERMATO</h1>
        </Left>
        <Middle>
          <h2>CONTATO</h2>
          <p>+55 21 9999-9999</p>
          <p>contato@dermato.com.br</p>
          <hr />
          <p>Rua São Paulo, 45 - Americana</p>
          <p>Americana - SP</p>
          <hr />
          <ContainerIcons>
            <img src={Insta} alt="Logo Instagram" />
            <img src={Face} alt="Logo Face" />
            <img src={Youtube} alt="Logo Youtube" />
          </ContainerIcons>
        </Middle>
        <Right>
          <h2>INFORMAÇÕES</h2>
          <p>Procedimentos</p>
          <p>Contato</p>
          <p>Termos e Condições</p>
        </Right>
      </ContainerFooter>
      <Direitos>
        <p>Dermato Alguns direitos reservados</p>{" "}
      </Direitos>
    </>
  );
};

export default Footer;
