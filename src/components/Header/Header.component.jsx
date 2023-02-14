import {
  HeaderContainer,
  ContainerLeft,
  ContainerRight,
} from "./Header.styles";
import Destaque from "../../assets/destaque.png";
import Button from "../Button/Button.component";

import ScheduleContext from "../../Provider/ScheduleContext";
import { useContext } from "react";

const Header = () => {
  const { openModal, setScheduleModalIsOpen } = useContext(ScheduleContext);
  return (
    <HeaderContainer id="inicio">
      <ContainerLeft>
        <h1>A sua beleza é única, o tratamento também</h1>
        <p>
          A padronização de tratamentos estéticos gera resultados artificiais.
          Por isso analisamos sua pele e realizamos apenas procedimentos
          personalizados para você.
        </p>
        <Button onClick={openModal}>AGENDAR CONSULTA</Button>
      </ContainerLeft>
      <ContainerRight>
        <div>
          <img src={Destaque} alt="Imagem mulher" />
        </div>
      </ContainerRight>
    </HeaderContainer>
  );
};
export default Header;
