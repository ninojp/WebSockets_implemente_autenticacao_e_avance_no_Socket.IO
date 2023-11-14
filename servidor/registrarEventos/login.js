"use strict"
import { encontarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io){
    socket.on("autenticar_usuario", async ({nome, senha}) => {
        const usuario = await encontarUsuario(nome);
        if(usuario){
            const autenticado = autenticarUsuario(senha, usuario)
            if(autenticado){
                const tokenJwt = gerarJwt({nomeUsuario: nome});
                socket.emit("autenticado_sucesso", tokenJwt);
            }else{
                socket.emit("autenticado_erro");
            }
        }else{
            socket.emit("usuario_nao_encontrado");
        }
    });
};
export default registrarEventosLogin;