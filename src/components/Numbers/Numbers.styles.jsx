import styled from "styled-components";

export const NumbersContainer = styled.div`
  width: 1162px;
  height: 206px;

  padding: 72px 132px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;

  position: absolute;
  top: 613px;
  left: 139px;

  hr {
    border: 1px solid #7e623caa;
    height: 72px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 52px;
    font-weight: 700;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    color: #2e2e2e;
  }
`;
