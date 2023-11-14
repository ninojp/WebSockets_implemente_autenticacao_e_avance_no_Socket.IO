"use strict"

function definirCookie(chave, valor){
    document.cookie = `${chave}=${valor};path=/`;
};

function obterCookie(chave){
    return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${chave}=`))
    ?.split("=")[1];
}

function removerCookie(){
    
}
export {definirCookie, obterCookie};