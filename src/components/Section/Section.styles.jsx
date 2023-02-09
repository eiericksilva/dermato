import styled from "styled-components";

export const ContainerSection = styled.div`
  background-color: #ffffff;
  display: flex;
  background-color: #fcf8f5;
`;

export const ContainerLeft = styled.div`
  margin: 80px 198px;
`;
export const ContainerImage = styled.div`
  width: 340px;
  height: 550px;
  background-color: #ffccd1;
  position: relative;

  img {
    width: 340px;
    height: 550px;
    position: absolute;
    right: 59px;
    top: 48px;
  }
`;
export const ContainerRight = styled.div`
  width: 50%;
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #dc2428;
    font-size: 36px;
    font-weight: 700;
  }

  p {
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
`;

export const Navbar = styled.ul`
  padding-left: 40px;

  li {
    padding-bottom: 8px;
  }
`;
