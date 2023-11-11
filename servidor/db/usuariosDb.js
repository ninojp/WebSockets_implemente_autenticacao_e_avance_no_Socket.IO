import { usuariosColecao } from "./dbConnect.js";

function encontarUsuario(nome){
    return usuariosColecao.findOne({nome});
}
function cadastrarUsuario({nome, senha}) {
    return usuariosColecao.insertOne({nome, senha});
}
export {encontarUsuario,cadastrarUsuario};