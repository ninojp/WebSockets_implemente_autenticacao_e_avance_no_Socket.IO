"use strict"
import { encontarUsuario,cadastrarUsuario } from "../db/usuariosDb.js";

function registrarEventosCadastrar(socket, io){
    socket.on("cadastrar_usuario", async (dados) => {
        const usuario = await encontarUsuario(dados.nome);
        // console.log(usuario);
        if(usuario === null){
            const resultado = await cadastrarUsuario(dados);
            // console.log(resultado);
            if(resultado.acknowledged){
                socket.emit("cadastro_sucesso");
            }else{
                socket.emit("cadastro_erro");
            }
        }else{
            socket.emit("usuario_existente");
        }
    });
}
export default registrarEventosCadastrar;