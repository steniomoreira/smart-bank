import React from "react";
import { Box, Botao } from "../../Components/UI";
import Items from "../Items";
import { extratoLista } from "../../info";

const Extrato = () => (
  <Box>
    {extratoLista.updates.map(({ id, type, from, value, date }) => (
      <Items key={id} type={type} from={from} value={value} date={date} />
    ))}

    <Botao>Ver mais</Botao>
  </Box>
);

export default Extrato;
