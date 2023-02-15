import React, { useContext } from "react";
import ScheduleContext from "../../Provider/ScheduleContext";
import ModalGeneric from "../ModalGeneric/ModalGeneric";
import { Button, DialogActions, TextField } from "@mui/material";

import { useForm } from "react-hook-form";

/* Validação */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "./ScheduleModal.styles";
import { padding } from "@mui/system";

const schema = yup
  .object({
    first_name: yup
      .string("Não pode haver numeros")
      .required("Primeiro nome é obrigatório"),
    last_name: yup
      .string("Não pode haver numeros")
      .required("Sobrenome é obrigatório"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Email é obrigatório"),
    date: yup.string().required("Informe a data da consulta"),
    time: yup.string().required("Horário da consulta é obrigatório"),
  })
  .required();

const ScheduleModal = () => {
  const { ScheduleModalIsOpen, closeModal } = useContext(ScheduleContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (ScheduleData) => {
    alert(`Consulta agendada com sucesso!`);

    closeModal();
  };

  return (
    <ModalGeneric title="Agendar Consulta" isVisible={ScheduleModalIsOpen}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            autoFocus
            margin="dense"
            id="first_name"
            label="Nome"
            type="text"
            fullWidth
            variant="outlined"
            {...register("first_name")}
          />
          {errors.first_name ? (
            <p className="errorMessage">{errors.first_name?.message}</p>
          ) : null}
          <TextField
            margin="dense"
            id="last_name"
            label="Sobrenome"
            type="text"
            fullWidth
            variant="outlined"
            {...register("last_name")}
          />
          {errors.last_name ? (
            <p className="errorMessage">{errors.last_name?.message}</p>
          ) : null}
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            {...register("email")}
          />
          {errors.email ? (
            <p className="errorMessage">{errors.email?.message}</p>
          ) : null}
          <TextField
            margin="dense"
            id="date"
            type="date"
            label="Data"
            fullWidth
            variant="outlined"
            {...register("date")}
          />
          {errors.date ? (
            <p className="errorMessage">{errors.date?.message}</p>
          ) : null}
          <TextField
            margin="dense"
            id="time"
            type="time"
            label="Hora"
            fullWidth
            variant="outlined"
            {...register("time")}
          />
          {errors.time ? (
            <p className="errorMessage">{errors.time?.message}</p>
          ) : null}
          <DialogActions>
            <Button type="submit">Confirmar</Button>
            <Button onClick={closeModal}>Cancelar</Button>
          </DialogActions>
        </div>
      </form>
    </ModalGeneric>
  );
};

export default ScheduleModal;
