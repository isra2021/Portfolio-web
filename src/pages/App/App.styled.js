import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.secondary};
  position: relative;
  z-index: 9999;
  overflow: hidden;
`;
