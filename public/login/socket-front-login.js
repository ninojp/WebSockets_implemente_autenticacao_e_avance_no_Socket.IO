"use strict"
const socket = io();

function emitirAutenticarUsuario(dados){
    socket.emit("autenticar_usuario", dados);
}
socket.on("autenticado_sucesso", () => {
    alert("Usuário autenticado com Sucesso!")
    window.location.href = "/";
});
socket.on("autenticado_erro", () => alert("Erro na autentificação do Usuário!"));
socket.on("usuario_nao_encontrado", () => alert("Usuário não encontrado!"));

export {emitirAutenticarUsuario};