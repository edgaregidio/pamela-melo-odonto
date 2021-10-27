import React from "react";
import { Container, ImageLogo } from "./styles";
import logo from "../../public/logo.png";

export default function Header() {
  return (
    <Container>
      <ImageLogo
        alt="Logo Pamela Melo"
        layout="intrinsic"
        width={235}
        height={110}
        src={logo}
      />
    </Container>
  );
}
