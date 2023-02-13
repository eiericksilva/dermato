import React, { useEffect } from "react";
import { Container, Links } from "./MenuMobile.styles";
import { IoMdClose } from "react-icons/io";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible, setMenuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <IoMdClose size={35} onClick={() => setMenuIsVisible(false)} />
      <Links onClick={() => setMenuIsVisible(false)}>
        <a href="#inicio">Início</a>
        <a href="#servicos">Serviços</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </Links>
    </Container>
  );
};

export default MenuMobile;
