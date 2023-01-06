import {Container, About, Section, Text, Image} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <Container id='about'>
      <Image src='/eliot2webp 2.png' alt='eliot' />
      <About>
        <Section>SOBRE MI.</Section>
        <Text>
          Mi nombre es Israel, tengo 24 anios, soy Argentino, estudio la carrera
          Ciencias de la Computacion en UNC-FAMAF, donde aprendi las bases de la
          programacion. Soy un apasionado por la investigacion, busco
          constantemente estar al dia en el mundo de la Tecnologia. Lo que mas
          me gusta del area de la tecnologia es el trabajo en equipo, conocer
          nuevas personas y aprender de ellas.
        </Text>
      </About>
    </Container>
  );
};
export default AboutMe;
