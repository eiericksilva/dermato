import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #644b2c;
  height: 483px;

  display: flex;
  padding: 80px 140px;
  justify-content: space-around;
  color: #ffffff;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }
  h2 {
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 400;
  }

  hr {
    border: 1px solid #ffffff;
  }
`;

export const Left = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Middle = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Right = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ContainerIcons = styled.div`
  display: flex;
  img {
    margin-right: 42px;

    &:hover {
      cursor: pointer;
    }
  }
`;
