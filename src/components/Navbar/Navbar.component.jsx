import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { NavbarContainer, NavLinks } from "./Navbar.styles";
import MenuMobile from "../MenuMobile/MenuMobile";
const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(true);
  return (
    <NavbarContainer>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <h1>DERMATO</h1>
      <GrMenu size={30} color="red" onClick={() => setMenuIsVisible(true)} />
      <NavLinks>
        <li>
          <a href="#inicio">Início</a>
        </li>
        <li>
          <a href="#servicos">Serviços</a>
        </li>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
