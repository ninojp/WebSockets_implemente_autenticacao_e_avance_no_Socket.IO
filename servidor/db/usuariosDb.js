import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontarUsuario(nome){
    return usuariosColecao.findOne({nome});
}
function cadastrarUsuario({nome, senha}) {
    const {hashSenha, salSenha} = criaHashESalSenha(senha);

    return usuariosColecao.insertOne({nome, hashSenha, salSenha});
}
export {encontarUsuario,cadastrarUsuario};