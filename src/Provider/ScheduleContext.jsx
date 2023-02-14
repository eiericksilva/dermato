import React, { useState, createContext } from "react";

const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [ScheduleModalIsOpen, setScheduleModalIsOpen] = useState(false);
  const openModal = () => {
    setScheduleModalIsOpen(true);
  };
  const closeModal = () => {
    setScheduleModalIsOpen(false);
  };
  return (
    <ScheduleContext.Provider
      value={{
        ScheduleModalIsOpen,
        setScheduleModalIsOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

export default ScheduleContext;
