import fs from 'fs';

const ARQUIVO = `${__dirname}/storage/contatos.json`;
let contatosApi = Array();


function loadContatos(){
    console.log(ARQUIVO)
    if(!fs.existsSync(ARQUIVO)) fs.writeFileSync(ARQUIVO, JSON.stringify([]));
    const data = fs.readFileSync(ARQUIVO);
    contatosApi = JSON.parse(data.toString());
    return contatosApi;
}

function saveContato(data: any){
    contatosApi.push({
        id:contatosApi.length+1,
        ...data
    });
    fs.writeFileSync(ARQUIVO, JSON.stringify(contatosApi))
}

export {loadContatos, saveContato};