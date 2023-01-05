import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  width: min(1200px, 100%);
  min-height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  border: ${({theme}) => `10px solid ${theme.colors.secondary}`};
  border-left: none;
`;

export const About = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 3;
  @media screen and (max-width: 800px) {
    margin-left: auto;
  }
`;

export const Section = styled.h2`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize["32"]};
  font-weight: 700;
`;

export const Text = styled.p`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fontSize["16"]};
  font-weight: 400;
`;

export const Image = styled.img`
  min-width: 200px;

  @media screen and (max-width: 800px) {
    position: absolute;
    z-index: 2;
    left: 0;
    width: 300px;
  }
`;
