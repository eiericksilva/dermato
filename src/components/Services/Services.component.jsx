import React from "react";
import Card from "../Card/Card.component";
import { ContainerCards, ServicesContainer } from "./Services.styles";
import Limpeza from "../../assets/Vector.png";
import Peeling from "../../assets/Vector2.png";
import Radiesse from "../../assets/Vector3.png";
import LiftingNaoInvasivo from "../../assets/Vector4.png";
import DrenagemLinfatica from "../../assets/Vector5.png";
import Microagulhamento from "../../assets/Vector6.png";
import Numbers from "../Numbers/Numbers.component";

const Services = ({ image, title, description }) => {
  return (
    <ServicesContainer>
      <Numbers />
      <div>
        <h2 id="servicos">Tratamentos estéticos</h2>
      </div>
      <ContainerCards>
        <Card
          image={Limpeza}
          title="Limpeza de Pele"
          description="Promove a renovação celular, de forma progressiva, estimulando a regeneração natural dos tecidos."
        />
        <Card
          image={Peeling}
          title="Peeling"
          description="Promove a renovação celular, de forma progressiva, estimulando a regeneração natural dos tecidos."
        />
        <Card
          image={Radiesse}
          title="Radiesse"
          description="Proporciona uma correção imediata de efeitos comuns do envelhecimento, como flacidez e perda de sustentação da pele."
        />
        <Card
          image={LiftingNaoInvasivo}
          title="Lifting Não Invasivo"
          description="Tratamento que devolve o tônus à pele e amenizar sinais de envelhecimento sem demandar internação hospitalar."
        />
        <Card
          image={DrenagemLinfatica}
          title="Drenagem Linfática"
          description="Ajuda na eliminação de toxinas, melhora o sistema imunológico, melhora a aparência de celulite."
        />
        <Card
          image={Microagulhamento}
          title="Microagulhamento"
          description="Indicado para remover cicatrizes de acne, amenizar estrias, eliminar rugas, diminuir a flacidez da pele e prevenir a queda de cabelo."
        />
      </ContainerCards>
    </ServicesContainer>
  );
};

export default Services;
