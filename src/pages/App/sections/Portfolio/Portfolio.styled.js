import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  width: min(1200px, 100%);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.h2`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize["32"]};
  font-weight: 700;
`;
export const Separator = styled.div`
  position: relative;
  width: 100%;
  border: ${({theme}) => `1px dashed ${theme.colors.secondary}`};
`;
