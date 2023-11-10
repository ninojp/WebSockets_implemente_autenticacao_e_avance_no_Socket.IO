
import registrarEventosDocumentos from "./registrarEventos/registrarEventosDocumentos.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
 registrarEventosInicio(socket, io);
 registrarEventosDocumentos(socket, io);
});
