import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  const [tema, setTema] = useState(true);
  const toggle = () => setTema(!tema);

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggle}>
        <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
