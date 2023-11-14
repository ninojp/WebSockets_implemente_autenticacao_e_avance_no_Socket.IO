"use strict"
import { definirCookie } from "../utils/cookies.js";

const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}
socket.on("autenticado_sucesso", (tokenJwt) => {
    definirCookie("tokenJwt", tokenJwt);

    alert("Usuário autenticado com Sucesso!");
    window.location.href = "/";
});
socket.on("autenticado_erro", () => alert("Erro na autentificação do Usuário!"));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado!"));

export {emitirAutenticarUsuario};