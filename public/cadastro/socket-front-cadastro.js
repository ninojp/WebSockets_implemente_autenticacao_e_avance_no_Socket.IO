"use strict"
const socket = io();
function emitirCadastrarUsuario(dados){
    socket.emit("cadastrar_usuario", dados);
}
socket.on("cadastro_sucesso", () => alert("Cadastro realizado com Sucesso!"));
socket.on("cadastro_erro", () => alert("Erro no Cadastro!"));
socket.on("usuario_existente", () => alert("Este Usuário já Existe!"));

export {emitirCadastrarUsuario};