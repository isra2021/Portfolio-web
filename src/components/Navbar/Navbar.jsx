import {useState} from "react";
import {Container, Nav, Enlace, Control} from "./Navbar.styled";
import {CloseSquareOutline, MenuOutline} from "@styled-icons/evaicons-outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Nav open={open}>
        <Enlace href='#welcome'>Bienvenido</Enlace>
        <Enlace href='#skills'>Habilidades</Enlace>
        <Enlace href='#portfolio'>Portafolio</Enlace>
      </Nav>
      {open ? (
        <Control as={CloseSquareOutline} onClick={() => setOpen(false)} />
      ) : (
        <Control as={MenuOutline} onClick={() => setOpen(true)} />
      )}
    </Container>
  );
};
export default Navbar;
