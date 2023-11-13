"use strict"
import { emitirAutenticarUsuario } from "./socket-front-login.js";

const form = document.getElementById("form-login");
form.addEventListener("submit", (eventoSubmit) => {
    eventoSubmit.preventDefault();//para impedir que o formulário atualize a página
    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;
    // console.log(nome, senha);
    emitirAutenticarUsuario({nome, senha});
});