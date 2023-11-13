"use strict"
import  jwt from "jsonwebtoken";
function gerarJwt(payLoad){
    const tokenJwt = jwt.sign(payLoad, process.env.SEGREDO_JWT, {expiresIn: "1h"});
    return tokenJwt;
}
export default gerarJwt;