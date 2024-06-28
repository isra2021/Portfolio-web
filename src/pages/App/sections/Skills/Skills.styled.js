import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: min(1200px, 100%);
  min-height: 50vh;
  color: ${({theme}) => theme.colors.text};
`;

export const Section = styled.h2`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize["32"]};
  font-weight: 700;
`;

export const Skills = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const HardSkills = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const HardSkillsName = styled.h3`
  font-size: ${({theme}) => theme.fontSize["24"]};
  font-weight: 600;
`;

export const ListHardSkills = styled.ul`
  padding-left: 20px;
`;

export const Row = styled.li`
  list-style-type: square;
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${({theme}) => theme.fontSize["16"]};
  margin-bottom: 5px;

  & span {
    color: ${({theme}) => theme.colors.text};
  }
`;

export const SoftSkills = styled(HardSkills)``;
export const SoftSkillsName = styled(HardSkillsName)``;
export const ListSoftSkills = styled(ListHardSkills)``;
