import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #ffffff;
  width: 347px;
  height: 230px;
  padding: 30px;

  margin: 10px auto;
  border-radius: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  justify-content: space-around;
  align-items: center;

  img {
    background-color: #ffccd1;
    padding: 10px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  #title {
    font-size: 16px;
    font-weight: 700;
    color: #dc2428;
    padding-bottom: 0;
    margin: 0 auto;
  }
`;

export const Bottom = styled.div`
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;
