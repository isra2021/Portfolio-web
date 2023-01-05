import {Container, About, Section, Text, Image} from "./AboutMe.styled";

const AboutMe = () => {
  return (
    <Container id='about'>
      <Image src='/eliot2webp 2.png' alt='eliot' />
      <About>
        <Section>ABOUT ME.</Section>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, ex
          tempora assumenda facere labore, impedit omnis natus quasi ipsa
          ratione est. Assumenda temporibus odio sequi iusto itaque, quam
          obcaecati voluptatibus molestiae, porro quos unde. Debitis maiores
          earum odio in omnis? Ab qui sunt amet explicabo atque saepe, ut velit
          tempore possimus repellendus sed vitae dignissimos adipisci veniam
          doloribus et nemo quae a sint optio voluptate, nisi dolore ullam unde!
          Ab sequi iure, inventore quae quaerat enim deleniti saepe mollitia
          nihil ullam soluta consequuntur consequatur magni harum quis delectus
          provident iusto placeat voluptas in nemo impedit! Magnam consequuntur
          similique aspernatur illum?
        </Text>
      </About>
    </Container>
  );
};
export default AboutMe;
