import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;

  @media screen and (max-width: 850px) {
    flex-direction: column;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  padding: 50px 0;
`;

export const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const Info = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize["14"]};
  font-weight: 400;

  & span {
    font-size: ${({ theme }) => theme.fontSize["16"]};
    font-weight: 500;
  }

  & a {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Galery = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    appearance: none;
    width: 5px;
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.text};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
