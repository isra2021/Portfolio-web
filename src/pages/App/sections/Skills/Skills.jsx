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
    "Jest",
    "React Testing Library",
    "Python",
    "Django Rest Framework",
    "MySQL",
    "Mongo DB",
    "Github",
  ];
  const softSkills = ["Comuniacion", "Trabajo en equipo.", "Organizado"];

  return (
    <Container id='skills'>
      <Section>SKILLS.</Section>
      <SkillsContainer>
        <HardSkills>
          <HardSkillsName>HARD SKILLS:</HardSkillsName>
          <ListHardSkills>
            {skills.map((skill) => (
              <Row>
                <span>{skill}</span>
              </Row>
            ))}
          </ListHardSkills>
        </HardSkills>
        <SoftSkills>
          <SoftSkillsName>SOFT SKILLS:</SoftSkillsName>
          <ListSoftSkills>
            {softSkills.map((skill) => (
              <Row>
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
