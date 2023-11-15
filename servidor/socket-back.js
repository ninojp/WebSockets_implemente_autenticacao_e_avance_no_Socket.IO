"use strict";
import "dotenv/config";
import io from "./servidor.js";
import registrarEventosDocumentos from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastrar from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
    registrarEventosInicio(socket, nspUsuarios);
    registrarEventosDocumentos(socket, nspUsuarios);
});

io.of("/").on("connection", (socket) => {
    registrarEventosCadastrar(socket, io);
    registrarEventosLogin(socket, io);
});
