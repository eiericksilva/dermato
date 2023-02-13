import styled from "styled-components";

export const CardQuestion = styled.div`
  width: 660px;
  max-width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border: 1px solid #b2b2b2;
  padding: 20px 30px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 1235px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  h2 {
    font-size: 20px;
    font-weight: 700;
  }

  button {
    background-color: #ffffff;
    border: none;

    img {
      width: 20px;
      height: 10px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
export const Bottom = styled.span`
  width: 510px;
  max-width: 100%;
  padding-top: 20px;
`;
