import {Container, Img, Info, Text, Galery} from "./Card.styled";

const Card = ({
  imgs,
  name,
  backend,
  frontend,
  deploy,
  technologies,
  description,
}) => {
  return (
    <Container key={name}>
      <Info>
        <Text>
          <span>Nombre del proyecto: </span> {name}
        </Text>
        <Text>
          <span>Visitar proyecto: </span>
          <a href={deploy} target='_blank'>
            {deploy}
          </a>
        </Text>
        <Text>
          <span>Repositorio Backend: </span>
          {backend !== "No disponible" && (
            <a href={backend} target='_blank'>
              {backend}
            </a>
          )}
          {backend === "No disponible" && backend}
        </Text>
        <Text>
          <span>Repositorio Frontend: </span>

          <a href={frontend} target='_blank'>
            {frontend}
          </a>
        </Text>

        <Text>
          <span>Tecnologias:</span> {technologies}.
        </Text>
        <Text>
          <span>Sobre el proyecto:</span> {description}
        </Text>
      </Info>
      <Galery>
        {imgs?.map((i, index) => (
          <Img key={index} src={i} alt='project' loading='lazy' />
        ))}
      </Galery>
    </Container>
  );
};
export default Card;
