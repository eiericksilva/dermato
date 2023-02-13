import styled from "styled-components";

export const ContainerSection = styled.div`
  display: flex;
  background-color: #fcf8f5;

  @media (max-width: 1060px) {
    margin: 0;
    padding-top: 30px;
  }
`;

export const ContainerLeft = styled.div`
  margin: 80px 130px;

  @media (max-width: 1024px) {
    margin: 10px;
    margin-left: 80px;

    img {
      margin: auto;
    }
  }

  @media (max-width: 900px) {
    display: none;
    width: 100%;
  }
`;
export const ContainerImage = styled.div`
  width: 340px;
  height: 550px;
  background-color: #ffccd1;
  position: relative;

  img {
    object-fit: contain;
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

  @media (max-width: 1060px) {
    margin: 10px;
    padding: 10px;
    width: 90%;
  }

  h2 {
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
