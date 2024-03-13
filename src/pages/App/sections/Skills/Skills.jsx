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
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React JS",
    "React Native",
    "Jest",
    "React Testing Library",
    "Python",
    "Django Rest Framework",
    "MySQL",
    "Mongo DB",
    "Github",
  ];
  const softSkills = ["Comuniacion", "Trabajo en equipo", "Organizado"];

  return (
    <Container id="skills">
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
