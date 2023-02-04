import React from "react";
import { HeaderMenuContainer } from "./header-menu.styles";

const HeaderMenu = () => {
  return (
    <HeaderMenuContainer>
      <p>dermato</p>
      <ul>
        <li>Início</li>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </HeaderMenuContainer>
  );
};

export default HeaderMenu;
