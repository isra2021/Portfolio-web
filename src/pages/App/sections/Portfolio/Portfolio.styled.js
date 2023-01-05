import styled from "styled-components";

export const Container = styled.section`
  padding: 20px;
  width: min(1200px, 100%);
  min-height: 60vh;
  display: flex;
  gap: 50px;
  flex-direction: column;
  border: ${({theme}) => `10px solid ${theme.colors.secondary}`};
  border-left: none;
  border-top: none;
`;

export const Section = styled.h2`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize["32"]};
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Separator = styled.div`
  position: relative;
  width: 100%;
  border: ${({theme}) => `1px dashed ${theme.colors.secondary}`};
`;
