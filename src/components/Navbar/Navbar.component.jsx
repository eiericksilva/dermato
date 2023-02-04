import React from "react";

import { NavbarContainer, NavLinks } from "./Navbar.styles";
const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>DERMATO</h1>
      <NavLinks>
        <li>Início</li>
        <li>Serviços</li>
        <li>Sobre</li>
        <li>Contato</li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
