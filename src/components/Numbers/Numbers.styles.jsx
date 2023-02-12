import styled from "styled-components";

export const NumbersContainer = styled.div`
  max-width: 1162px;
  width: 80%;
  height: 206px;
  padding: 72px 132px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #f2f2f2;

  position: absolute;

  top: -56px;

  hr {
    border: 1px solid #7e623caa;
    height: 72px;
  }

  @media (max-width: 950px) {
    padding: 0;
    top: -30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 70%;
    gap: 30px;
    top: -10px;
    left: auto;

    hr {
      display: none;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3.25rem;
    margin-bottom: 0;
  }
`;
