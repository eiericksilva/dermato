import React from "react";
import ImagemProduto from "../../assets/ImagemProduto.png";
import Question from "../Question/Question.component";
import {
  ContainerImage,
  ContainerLeft,
  ContainerRight,
  ContainerSection,
} from "../Questions/Questions.styles";

import { Fade } from "react-awesome-reveal";

const Questions = () => {
  return (
    <ContainerSection>
      <ContainerLeft>
        <Fade cascade duration="400">
          <Question
            question="Como se preparar para a consulta?"
            answer="Anote todas as suas dúvidas caso esqueça na hora da consulta. Deixe as unhas livres de esmaltes e o rosto limpo, sem maquiagem para não interferir na análise. "
          />
          <Question
            question="Com que frequência devo ir ao dermatologista?"
            answer="Geralmente, o ideal é que as consultas dermatológicas sejam realizadas a cada 6 meses. Assim, as chances de diagnosticar os problemas de saúde ainda em sua forma inicial são maiores."
          />
          <Question
            question="Preciso de encaminhamento para consulta?"
            answer="Para marcar uma consulta com um dermatologista pelo SUS, você deve se dirigir a uma unidade de saúde com seu Cartão Nacional de Saúde e solicitar o agendamento da consulta."
          />
          <Question
            question="O que um dermatologista faz em uma consulta?"
            answer="Durante a consulta, o médico vai fazer uma análise clínica no paciente e tentar encontrar uma possível doença. Além disso, pode solicitar alguns tipos de exames, como o de sangue. Após analisar os sintomas e o resultado dos exames, o médico vai iniciar o tratamento da doença ou condição"
          />
          <Question
            question="O que devo esperar de uma análise de pele?"
            answer="Detectar precocemente o câncer de pele, tanto o melanoma quanto o não-melanoma. Se diagnosticado e tratado enquanto o tumor ainda não invadiu profundamente a pele, o câncer de pele pode ser curado."
          />
        </Fade>
      </ContainerLeft>
      <Fade direction="right">
        <ContainerRight>
          <ContainerImage id="ContainerImage">
            <img
              src={ImagemProduto}
              alt="Foto de um produto com um coco to lado"
            />
          </ContainerImage>
        </ContainerRight>
      </Fade>
    </ContainerSection>
  );
};

export default Questions;
