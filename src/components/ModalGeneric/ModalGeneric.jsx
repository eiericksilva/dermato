import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ScheduleContext from "../../Provider/ScheduleContext";

const ModalGereric = ({ children, title }) => {
  const { ScheduleModalIsOpen, setScheduleModalIsOpen, closeModal } =
    React.useContext(ScheduleContext);
  return (
    <Dialog open={ScheduleModalIsOpen} onClose={closeModal}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalGereric;
