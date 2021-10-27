import React from "react";
import banner1 from "../../public/banner1.jpeg";
import avatar from "../../public/perfilpamela.jpeg";

import {
  Container,
  ImageBanner,
  About,
  CircleAvatar,
  Avatar,
} from "../Banner/styles";

export default function Banner() {
  return (
    <Container>
      <ImageBanner
        alt="Banner Home"
        layout="responsive"
        height={770}
        sizes={"100vw"}
        objectFit={"cover"}
        src={banner1}
      />
      <About>
        <CircleAvatar>
          <Avatar src={avatar} overflow="hidden" className={"borderCircular"} />
        </CircleAvatar>
        <h1>Quem sou eu?</h1>
        <p>
          Me apaixonei pela odontologia ao perceber como essa profissão pode
          melhorar a autoestima e mudar a vida de muitos pacientes, através do
          estudo e trabalho bem realizado. A partir daí, me formei em
          odontologia pela faculdade UNIEvangélica de Anápolis e pós graduei em
          odontologia hospitalar pelo Hospital Israelita Albert Einsten-SP e
          Ortodontia pela Ortoplace-GO, além de outros cursos rápidos. Meu
          compromisso com o paciente é oferecer o melhor tratamento no menor
          tempo possível, tornando este acessível para quem deseja realizá-lo.”
        </p>
      </About>
    </Container>
  );
}
