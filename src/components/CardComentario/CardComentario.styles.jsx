import styled from "styled-components";

export const WrapperComentario = styled.div`
  background-color: #ffffff;
  width: 450px;
  height: 255px;
  border-radius: 5px;

  display: flex;
  gap: 20px;
  margin: 50px;
  padding: 35px;

  @media (max-width: 1190px) {
    margin: 5px;
  }

  @media (max-width: 990px) {
    margin: 30px auto;
  }
  @media (max-width: 480px) {
    margin: 10px;
    width: 300px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 175px;
    border-radius: 50px;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 1.2rem;
    color: #000000;
    padding: 0;
  }
  hr {
    border: 1.5px solid #2e2e2e;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    color: #2e2e2e;
  }

  img {
    width: 150px;
  }
`;
