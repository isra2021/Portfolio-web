import styled from "styled-components";
import {Github as G, Whatsapp as W, Linkedin as L} from "@styled-icons/boxicons-logos";

export const Container = styled.section`
  padding: 20px;
  width: min(1200px, 100%);
  min-height: calc(100vh - 70px);
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${({theme}) => theme.colors.secondary};
  flex-wrap: wrap;
  margin: auto;
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 800px) {
  }
`;

export const Hello = styled.p`
  font-size: ${({theme}) => theme.fontSize["50"]};
  font-weight: 700;

  & span {
    color: ${({theme}) => theme.colors.text};
  }
`;

export const Role = styled.p`
  font-size: ${({theme}) => theme.fontSize["40"]};
  font-weight: 500;
`;

export const Social = styled.div`
  display: flex;
  gap: 10px;
  margin: 24px 0;

  & a {
    color: ${({theme}) => theme.colors.secondary};
  }
`;

export const Github = styled(G)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Whatsapp = styled(W)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Linkedin = styled(L)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Download = styled.a`
  max-width: 350px;
  height: 70px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.secondary};
  border-width: 1px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSize["40"]};
  cursor: pointer;
`;

export const Image = styled.img`
  min-width: 200px;
  max-width: 400px;
`;
