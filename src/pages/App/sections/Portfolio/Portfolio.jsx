import {Container, Section, Separator} from "./Portfolio.styled";
import Card from "../../../../components/Card/Card";

const Portfolio = () => {
  const projects = [
    {
      imgs: [
        "/welcome.PNG",
        "/login.PNG",
        "/register.PNG",
        "/verify.PNG",
        "/avatarSubmit.PNG",
        "/home.PNG",
        "/createSimulation.PNG",
        "/simulation.PNG",
        "/create.PNG",
        "/listMatches.PNG",
        "/robots.PNG",
        "/createBot.PNG",
        "/profile.PNG",
        "/changePassword.PNG",
        "/match.PNG",
        "/finish.PNG",
      ],
      name: "PyRobots",
      backend: "https://github.com/whileTrue-FaMAFyC/backend",
      frontend: "https://github.com/whileTrue-FaMAFyC/frontend",
      deploy: "https://whiletrue.vercel.app",
      technologies:
        "HTML, CSS, JS, React JS, Jest, React Testing Library, Python, FastAPI, GitHub, Jira.",
      description: `
        Este proyecto lo realice en la Universidad para la materia "Ing del Software" haciendo uso de la Metodologia Agil "Scrum".
        Es un juego llamado "PyRobots" que consiste en crear nuestros propios robots y luchar con robots de otros usuarios. Para poder
        jugarlo debemos registrarnos y verificar nuestra cuenta, una vez echo esto tenemos acceso a diferentes funcionabilidades como:
        Crear una simulacion: Muestra de forma grafica como se esta llevando a cabo el enfrentamiento de los robots y al final de la
        simulacion tenemos un ganador, ademas podemos pausar, retroceder, adelantar y reanudar la simulacion.
        Crear robot: El juego trae robots por defecto, pero nos da la posibilidad de crear nuestros propios robots con el
        comportamiento que nosotros deseemos, para esto debemos programar un script en un archivo .py y subirlo.
        Libreria de robots: Podremos ver los robots por defecto y nuestros propios robots.
        Perfil: Podemos ver la informacion del usuario, cambiar el avatar del usuario y ademas cambiar nuestra contrasena.
        Crear e iniciar partida: Podemos crear nuestra partida personalizada, una vez creada podemos unirnos, esperar a que se una algun otro usuario
        e iniciar la partida.Ademas sino sos el creador podras abandonar la partida y todo esto se mostrara en tiempo real.
        Al finalizar la partida solo se muestra el resultado de los ganadores.
        Lista de partidas: Muestra las partidas a las cuales puedo unirme con la posibilidad de hacer un filtrado de partidas.
        `,
    },
  ];
  return (
    <Container id='portfolio'>
      <Section>PORTFOLIO.</Section>
      {projects.map((p, index) => (
        <>
          <Card
            imgs={p.imgs}
            key={index}
            name={p.name}
            backend={p.backend}
            frontend={p.frontend}
            deploy={p.deploy}
            technologies={p.technologies}
            description={p.description}
          />
          {projects.length - 1 !== index && <Separator />}
        </>
      ))}
    </Container>
  );
};
export default Portfolio;
