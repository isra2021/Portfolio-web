import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  width: min(1200px, 100%);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 50px;
  border: ${({theme}) => `10px solid ${theme.colors.secondary}`};
  border-left: none;
  overflow: hidden;
  z-index: 100;
  flex-wrap: wrap-reverse;
`;

export const About = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: auto;
  gap: 20px;
  z-index: 3;
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
  max-width: 500px;
`;
