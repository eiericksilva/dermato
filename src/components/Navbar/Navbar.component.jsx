import React from "react";

import { NavbarContainer, NavLinks } from "./Navbar.styles";
const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>DERMATO</h1>
      <NavLinks>
        <li>
          <a href="#inicio">Início</a>{" "}
        </li>
        <li>
          <a href="#servicos">Serviços</a>{" "}
        </li>
        <li>
          <a href="#sobre">Sobre</a>{" "}
        </li>
        <li>
          <a href="#contato">Contato</a>{" "}
        </li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
