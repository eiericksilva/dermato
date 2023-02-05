import React, { useState } from "react";
import { Bottom, CardQuestion, Header } from "./Question.styles";
import IconUp from "../../assets/iconUp.png";
import IconDown from "../../assets/iconDown.png";

const Question = ({ question, answer }) => {
  const [cardIsOpen, setCardIsOpen] = useState(false);

  const toggleSetCardIsOpen = () => {
    setCardIsOpen(!cardIsOpen);
  };

  return (
    <CardQuestion>
      <Header>
        <h2>{question}</h2>
        <button onClick={toggleSetCardIsOpen}>
          <img src={cardIsOpen ? IconUp : IconDown} alt="Icone" />
        </button>
      </Header>
      {cardIsOpen && (
        <Bottom>
          <p>{answer}</p>
        </Bottom>
      )}
    </CardQuestion>
  );
};

export default Question;
