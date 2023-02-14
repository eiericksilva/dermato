import React, { useContext } from "react";
import ScheduleContext from "../../Provider/ScheduleContext";
import Button from "../Button/Button.component";
import ImageTratamento from "../../assets/tratamento.png";
import {
  ContainerImage,
  ContainerLeft,
  ContainerRight,
  ContainerSection,
  Navbar,
} from "./Section.styles";

import { Fade } from "react-awesome-reveal";

const SectionContainer = () => {
  const { openModal } = useContext(ScheduleContext);
  return (
    <ContainerSection>
      <Fade direction="left">
        <ContainerLeft>
          <ContainerImage>
            <img
              src={ImageTratamento}
              alt="Foto de uma cliente fazendo tratamento"
            />
          </ContainerImage>
        </ContainerLeft>
      </Fade>
      <Fade direction="right" delay={200}>
        <ContainerRight>
          <h2 id="sobre">Tratamentos dermatológicos</h2>
          <p>
            Há alguns anos, quando se falava em tecnologia, ela era associada
            apenas à engenharia e à ciência. Hoje a situação é diferente: nossas
            clientes já desfrutam de diversos tratamentos modernos, com
            segurança e rápida recuperação.
          </p>
          <Navbar>
            <li>Ultraformer III</li>
            <li>Laser de CO2</li>
            <li>Fotona 4D</li>
            <li>Reveal Imager</li>
          </Navbar>
          <p>
            Nossa clínica conta com softwares, sistemas e câmeras de alta
            resolução que nos ajudam a diagnosticar, mapear e documentar doenças
            da pele, cabelos e unhas, permitindo um diagnóstico e tratamento
            mais preciso.
          </p>
          <Button onClick={openModal}>Agendar Consulta</Button>
        </ContainerRight>
      </Fade>
    </ContainerSection>
  );
};

export default SectionContainer;
