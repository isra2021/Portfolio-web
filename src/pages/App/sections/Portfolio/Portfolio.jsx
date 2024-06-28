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
      deploy: "No se encuentra disponible",
      technologies: "HTML, CSS, JS, React JS, Jest, React Testing Library, Python, FastAPI, WebSockets, GitHub, Jira",
      description: `
      PyRobots es un proyecto desarrollado en la materia Ingeniería del Software, utilizando la metodología ágil Scrum. El juego simula peleas entre robots, donde los jugadores pueden enfrentar sus propias creaciones contra las de otros jugadores.
        `,
    },
    {
      imgs: [
        "/misterio1.PNG",
        "/misterio2.PNG",
        "/misterio3.PNG",
        "/misterio4.PNG",
        "/misterio5.PNG",
        "/misterio6.PNG",
        "/misterio7.PNG",
        "/misterio8.PNG",
        "/misterio9.PNG",
        "/misterio10.PNG",
        "/misterio11.PNG",
        "/misterio12.PNG",
      ],
      name: "Misterio",
      backend: "https://github.com/Failtures/misterio-back",
      frontend: "https://github.com/Failtures/misterio-front  ",
      deploy: "No se encuentra disponible",
      technologies: "HTML, CSS, JS, React JS, Python, FastAPI, GitHub, WebSockets, Jira",
      description: `El proyecto consiste en el desarrollo de un juego de misterio realizado como parte de la materia Ingeniería del Software en la facultad. Se utilizzaron metodologías ágiles durante su creación. `,
    },

    {
      imgs: ["/uno1.PNG", "/uno2.PNG", "/uno3.PNG", "/uno4.PNG", "/uno5.PNG", "/uno6.PNG", "/uno7.PNG", "/uno8.PNG"],
      name: "Uno",
      backend: "https://github.com/TheThingGame/Backend/tree/dev",
      frontend: "https://github.com/TheThingGame/Frontend",
      deploy: "No se encuentra disponible",
      technologies: "HTML, CSS, Tailwind, JS, React JS, Python, FastAPI, WebSockets, GitHub",
      description: `Proyecto realizado con mis propias manos para demostrar mis conocimientos fullstack`,
    },

    {
      imgs: ["/vaya.PNG", "/vaya2.PNG", "/vaya3.PNG"],
      name: "Vaya App",
      backend: "No disponible",
      frontend: "https://gitlab.com/israelangulo2021/vaya-app.git",
      deploy: "https://vayaapp.netlify.app",
      technologies: "HTML, CSS, JS, React JS",
      description: `Landing page que realice trabajando para la empresa it-techgroup`,
    },

    ,
    {
      imgs: ["/ecoff.PNG", "/ecoff2.PNG", "/ecoff3.PNG", "/ecoff4.PNG", "/ecoff5.PNG"],
      name: "Ecoff",
      backend: "No disponible",
      frontend: "https://gitlab.com/israelangulo2021/ecooff",
      deploy: "https://ecooff.netlify.app/",
      technologies: "HTML, CSS, JS, React JS",
      description: `Landing page que realice trabajando para la empresa it-techgroup`,
    },

    {
      imgs: [
        "/nutri.PNG",
        "/nutri3.PNG",
        "/nutri4.PNG",
        "/nutri5.PNG",
        "/nutri6.PNG",
        "/nutri7.PNG",
        "/nutri8.PNG",
        "/nutri9.PNG",
        "/nutri10.PNG",
      ],
      name: "Nutripharco",
      backend: "No disponible",
      frontend: "https://gitlab.com/israelangulo2021/nutripharco",
      deploy: "https://nutripharco.netlify.app/",
      technologies: "HTML, CSS, JS, React JS",
      description: `Landing page que realice trabajando para la empresa it-techgroup`,
    },
  ];
  return (
    <Container id='portfolio'>
      <Section>PORTAFOLIO.</Section>
      <div>
        {projects.map((p, index) => (
          <>
            <Card
              key={index}
              imgs={p.imgs}
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
      </div>
    </Container>
  );
};
export default Portfolio;
