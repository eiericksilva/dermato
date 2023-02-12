import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: #644b2c;
  height: 483px;
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
