import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #f7f1df;
  display: flex;
  padding: 48px 140px;
  align-items: center;

  @media (max-width: 950px) {
    padding: 20px;
    background-color: blue;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 30px;
  }
`;

export const ContainerLeft = styled.div`
  width: 45%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: max(3vw);
  }
`;
export const ContainerRight = styled.div`
  width: 65%;
  margin-left: 60px;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  div {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
`;
