import styled from "styled-components";

export const ServicesContainer = styled.div`
  background-color: #e4d0b4;
  min-height: 880px;
  width: 100%;
  padding-top: 175px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  h2 {
    font-size: 36px;
    font-weight: 700;
    text-align: center;

    color: #dc2428;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    padding-top: 400px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  min-height: 491px;
`;
