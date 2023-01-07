import React from "react";
import "./buttons.scss";

const Buttons = () => {
  return (
    <>
      <div class="button-grid">
        <button class="button primary">Botão primário</button>
        <button class="button secondary">Botão secundário</button>
        <button class="button success">Botão de sucesso</button>
        <button class="button danger">Botão de perigo</button>
        <button class="button warning">Botão de aviso</button>

        <button class="button loading loading-1">Carregando</button>
        <button class="button loading loading-2">Carregando</button>
        <button class="button loading loading-3">Carregando</button>
        <button class="button loading loading-4">Carregando</button>
        <button class="button loading loading-5">Carregando</button>
      </div>
    </>
  );
};

export default Buttons;
