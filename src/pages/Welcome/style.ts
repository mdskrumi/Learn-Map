import styled from "styled-components";

export const InitialGreeting = styled.div`
  z-index: 1;
  font-size: 64px;
  position: fixed;
  top: 30%;
  left: 10%;
  @media (max-width: 768px) {
    font-size: 48px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const MapNumberButtonDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  margin: auto;
  transform: translate(-50%, -50%);
  display: flex;
`;

export const ChooseMapDiv = styled.div`
  cursor: default;
`;

export const MapNumberButton = styled.div`
  padding: 10px;
  font-size: 48px;
  cursor: pointer;
  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
