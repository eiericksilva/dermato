import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #644b2c;
  min-height: 483px;
  height: auto;
  display: flex;
  padding: 80px 140px;
  justify-content: space-around;
  color: #ffffff;

  @media (max-width: 1015px) {
    flex-direction: column;
    padding: 30px;
  }

  h1 {
    font-size: 2rem;
    color: #fff;
  }
  h2 {
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }

  p {
    font-size: 16px;
    color: #fff;
  }

  hr {
    border: 1px solid #ffffff;
    width: 80%;
  }
`;

export const Left = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1015px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
export const Middle = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1015px) {
    margin-bottom: 30px;
  }
`;
export const Right = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Direitos = styled.div`
  background-color: #644b2c;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  p {
    color: #fff;
    font-size: 16px;
  }
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
