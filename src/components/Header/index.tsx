import React from "react";

import { Container, Logo, Picture } from "./styles";
import logoImg from '../../assets/logo.png'
import pictureImg from '../../assets/picture.png'

export function Header() {
  return (
    <Container>
      <Logo source={logoImg}   />
      <Picture source={pictureImg} />
    </Container>
  );
}
