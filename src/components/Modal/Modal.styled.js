import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
`;

export const Close = styled.p`
  font-weight: 900;
  font-size: 50px;
  position: absolute;
  top: 0;
  right: 20px;
  cursor: pointer;
`;
