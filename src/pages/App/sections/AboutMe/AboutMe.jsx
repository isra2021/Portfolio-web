import { Container, About, Section, Text, Image } from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <Container id="about">
      <Image src="/eliot2.png" alt="eliot" />
      <About>
        <Section>SOBRE MI.</Section>
        <Text>
          Soy Israel Angulo, un estudiante de 25 años en la Universidad Nacional de Córdoba, específicamente en FAMAF,
          donde estoy estudiando Ciencias de la Computación. Disfruto trabajando en equipo y participando en proyectos
          importantes que desafían y desarrollan mis habilidades. Me apasiona aprender nuevas tecnologías y estoy
          constantemente buscando oportunidades para expandir mi conocimiento en este campo.
        </Text>
      </About>
    </Container>
  );
};
export default AboutMe;
