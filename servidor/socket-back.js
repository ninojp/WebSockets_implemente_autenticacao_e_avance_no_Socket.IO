"use strict";
import "dotenv/config";
import io from "./servidor.js";
import registrarEventosDocumentos from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastrar from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";

io.on("connection", (socket) => {
 registrarEventosInicio(socket, io);
 registrarEventosDocumentos(socket, io);
 registrarEventosCadastrar(socket, io);
 registrarEventosLogin(socket, io);
});
