import React, { useContext } from "react";
import { useEffect } from "react";
import { Container, ErrorMessage, Form } from "./ScheduleModal.styles";
import ScheduleContext from "../../Provider/ScheduleContext";
import { AiFillCloseCircle } from "react-icons/ai";

import { useForm } from "react-hook-form";

/* Validação */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    first_name: yup
      .string("Não pode haver numeros")
      .required("Primeiro nome é obrigatório"),
    last_name: yup
      .string("Não pode haver numeros")
      .required("Sobrenome nome é obrigatório"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Email é obrigatório"),
    date: yup.string().required("Informe a data da consulta"),
    time: yup.string().required("Horário da consulta é obrigatório"),
  })
  .required();

const ScheduleModal = () => {
  const { ScheduleModalIsOpen, setScheduleModalIsOpen, closeModal } =
    useContext(ScheduleContext);

  useEffect(() => {
    document.body.style.overflowY = ScheduleModalIsOpen ? "hidden" : "auto";
  }, [ScheduleModalIsOpen, setScheduleModalIsOpen, closeModal]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (ScheduleData) => {
    alert(
      `Olá, ${ScheduleData.first_name} sua consulta foi agendada com sucesso! Obrigado pela preferência.`
    );
  };

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

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <br />
          <input
            type="text"
            placeholder="Nome próprio"
            {...register("first_name", { required: true })}
          />
          {errors.first_name ? (
            <ErrorMessage>{errors.first_name?.message}</ErrorMessage>
          ) : null}
          <br />
          <input
            type="text"
            placeholder="Sobrenome"
            {...register("last_name", { required: true })}
          />
          {errors.last_name ? (
            <ErrorMessage>{errors.last_name?.message}</ErrorMessage>
          ) : null}
        </label>
        <label>
          Email:
          <br />
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email ? (
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          ) : null}
        </label>
        <label>
          Data:
          <br />
          <input type="date" {...register("date", { required: true })} />
          {errors.date ? (
            <ErrorMessage>{errors.date?.message}</ErrorMessage>
          ) : null}
        </label>
        <label>
          Horário da Consulta:
          <br />
          <input type="time" {...register("time", { required: true })} />
          {errors.time ? (
            <ErrorMessage>{errors.time?.message}</ErrorMessage>
          ) : null}
        </label>
        <button onClick={() => handleSubmit(onSubmit)()} type="submit">
          Enviar
        </button>
      </Form>
    </Container>
  );
};

export default ScheduleModal;
