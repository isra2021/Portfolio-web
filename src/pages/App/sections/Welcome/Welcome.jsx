import {
  Container,
  Presentation,
  Hello,
  Role,
  Social,
  Github,
  Whatsapp,
  Linkedin,
  Download,
  Image,
} from "./Welcome.styled";

const Welcome = () => {
  return (
    <Container id='welcome'>
      <Presentation>
        <Hello>
          Hola yo soy <span>Israel</span>
        </Hello>
        <Role>Desarrollador Web</Role>
        <Social>
          <a href='https://github.com/isra2021' target='_blank'>
            <Github />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=543516430025'
            target='_blank'>
            <Whatsapp />
          </a>
          <a
            href='https://www.linkedin.com/in/israel-adrian-angulo/'
            target='_blank'>
            <Linkedin />
          </a>
        </Social>
        <Download href='/angulo_israel_cv.pdf' download>
          Descargar CV
        </Download>
      </Presentation>
      <Image src='/isra.png' alt='eliot' />
    </Container>
  );
};
export default Welcome;
