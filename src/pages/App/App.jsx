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
      <main style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "50px"}}>
        <Skills />
        <Portfolio />
      </main>
    </Container>
  );
};

export default App;
