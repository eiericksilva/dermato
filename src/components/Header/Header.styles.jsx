import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: #f7f1df;
  display: flex;
  padding: 48px 140px;
  align-items: center;
`;

export const ContainerLeft = styled.div`
  width: 45%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #dc2428;
    font-weight: 700;
    font-size: 48px;
    line-height: 62px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
    color: #2e2e2e;
  }
`;
export const ContainerRight = styled.div`
  width: 60%;
  background-color: transparent;
  padding-left: 60px;

  div {
    img {
      width: 617px;
    }
  }
`;
