import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.colors.secondary};
  background-color: rgba(66, 201, 32, 0.8);
  z-index: 4;
  display: flex;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  gap: 20px;

  @media screen and (max-width: 427px) {
    flex-direction: column;
    align-items: flex-start;
    max-height: ${({open}) => (open ? "180px" : "0px")};
    transition: all 300ms ease;
  }
`;

export const Control = styled.div`
  display: none;
  width: 30px;
  height: 30px;
  fill: ${({theme}) => theme.colors.primary};
  cursor: pointer;
  @media screen and (max-width: 427px) {
    display: flex;
  }
`;

export const Enlace = styled.a`
  color: ${({theme}) => theme.colors.text};
`;
