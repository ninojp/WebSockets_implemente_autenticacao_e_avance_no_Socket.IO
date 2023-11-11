import { emitirCadastrarUsuario } from "./socket-front-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (eventoSubmit) => {
    eventoSubmit.preventDefault();//para impedir que o formulário atualize a página
    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;
    // console.log(nome, senha);
    emitirCadastrarUsuario({nome, senha});
});