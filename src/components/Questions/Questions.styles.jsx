import styled from "styled-components";

export const ContainerSection = styled.div`
  background-color: #ffffff;
  display: flex;
  height: 682px;
`;

export const ContainerLeft = styled.div`
  margin: 80px;
`;
export const ContainerImage = styled.div`
  width: 371px;
  height: 470px;
  background-color: #ffccd1;
  position: relative;
  margin: 0 auto;

  img {
    width: 371px;
    height: 470px;
    position: absolute;
    right: 59px;
    top: 48px;
  }
`;
export const ContainerRight = styled.div`
  width: 50%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
