import {useState} from "react";
import {Container, Nav, Enlace, Control} from "./Navbar.styled";
import {CloseSquareOutline, MenuOutline} from "@styled-icons/evaicons-outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Nav open={open}>
        <Enlace href='#welcome'>Welcome</Enlace>
        <Enlace href='#about'>About me</Enlace>
        <Enlace href='#skills'>Skills</Enlace>
        <Enlace href='#portfolio'>Portfolio</Enlace>
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
