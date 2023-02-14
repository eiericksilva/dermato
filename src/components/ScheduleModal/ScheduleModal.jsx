import React, { useContext } from "react";
import { useEffect } from "react";
import { Container, Form } from "./ScheduleModal.styles";
import ScheduleContext from "../../Provider/ScheduleContext";
import { AiFillCloseCircle } from "react-icons/ai";

const ScheduleModal = () => {
  const { ScheduleModalIsOpen, setScheduleModalIsOpen, closeModal } =
    useContext(ScheduleContext);

  useEffect(() => {
    document.body.style.overflowY = ScheduleModalIsOpen ? "hidden" : "auto";
  }, [ScheduleModalIsOpen, setScheduleModalIsOpen]);

  return (
    <Container isVisible={ScheduleModalIsOpen}>
      <div className="Header">
        <h2>AGENDAMENTO - DERMATO</h2>
        <p>Preencha os campos para agendar</p>
        <hr />
      </div>
      <span className="closeCircle">
        <AiFillCloseCircle size={35} color="#f9637c" onClick={closeModal} />
      </span>
      <Form>
        <label>
          Nome:
          <input type="text" placeholder="Nome próprio" />
          <input type="text" placeholder="Sobrenome" />
        </label>
        <label>
          Email:
          <input type="text" placeholder="Email" />
        </label>
        <label>
          Data:
          <input type="date" />
        </label>
        <label>
          Horário da Consulta:
          <input type="time" />
        </label>
        <fieldset>
          <legend>Primeira Consulta?</legend>
          <label>
            Sim
            <input type="radio" value="sim" name="primeira_consulta" />
          </label>
          <label>
            Não
            <input type="radio" value="nao" name="primeira_consulta" />
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default ScheduleModal;
