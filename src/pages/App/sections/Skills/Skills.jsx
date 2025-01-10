import {
  Container,
  Section,
  Skills as SkillsContainer,
  HardSkills,
  HardSkillsName,
  ListHardSkills,
  Row,
  SoftSkills,
  SoftSkillsName,
  ListSoftSkills,
} from "./Skills.styled";

const Skills = () => {
  const skills = [
    "Metodologías Ágiles: SCRUM",
    "HTML",
    "CSS",
    "Tailwind",
    "JavaScript",
    "C",
    "TypeScript",
    "React JS",
    "Angular",
    "Next 14",
    "React Native",
    "Redux",
    "Jest",
    "React Testing Library",
    "Python",
    "FastAPI",
    "Java",
    "Spring Boot",
    "C#",
    ".NET",
    "MySQL",
    "MongoDB",
    "WebSockets",
    "GitHub",
    "Jira Software",
  ];

  const softSkills = ["Comuniacion", "Trabajo en equipo", "Organizado"];

  return (
    <Container id='skills'>
      <Section>HABILIDADES.</Section>
      <SkillsContainer>
        <HardSkills>
          <HardSkillsName>DURAS:</HardSkillsName>
          <ListHardSkills>
            {skills.map((skill, index) => (
              <Row key={index}>
                <span>{skill}</span>
              </Row>
            ))}
          </ListHardSkills>
        </HardSkills>
        <SoftSkills>
          <SoftSkillsName>BLANDAS:</SoftSkillsName>
          <ListSoftSkills>
            {softSkills.map((skill, index) => (
              <Row key={index}>
                <span>{skill}</span>
              </Row>
            ))}
          </ListSoftSkills>
        </SoftSkills>
      </SkillsContainer>
    </Container>
  );
};
export default Skills;
