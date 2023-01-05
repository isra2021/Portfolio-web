import {Container} from "./App.styled";
import Welcome from "./sections/Welcome/Welcome";
import AboutMe from "./sections/AboutMe/AboutMe";
import Navbar from "../../components/Navbar/Navbar";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Welcome />
      <AboutMe />
      <Skills />

      <Portfolio />
    </Container>
  );
};

export default App;
