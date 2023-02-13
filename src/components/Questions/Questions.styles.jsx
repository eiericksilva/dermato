import styled from "styled-components";

export const ContainerSection = styled.div`
  background-color: #ffffff;
  display: flex;
  min-height: 682px;

  @media (max-width: 1195px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContainerLeft = styled.div`
  margin: 80px;
  min-width: 50%;
  min-height: 80%;
  height: auto;
  max-width: 100%;
  @media (max-width: 1235px) {
    margin: 0 auto;
    padding: 10px;
    width: 100%;
  }
`;
export const ContainerRight = styled.div`
  width: auto;
  margin: 80px 0 0 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1235px) {
    display: none;
  }
`;

export const ContainerImage = styled.div`
  width: 371px;
  height: 470px;
  background-color: #ffccd1;
  position: relative;

  img {
    object-fit: contain;
    position: absolute;
    right: 59px;
    top: 48px;
  }
`;
