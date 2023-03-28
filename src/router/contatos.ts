import { Router } from 'express';
import { ObjetoRequeridosValidos } from '../helpers/validate';
import { loadContatos, saveContato } from '../helpers/load-data';

const router = Router(); 

router.get('/', function (request, response) {
    const contatosApi=loadContatos();
    response.send(contatosApi);
});

router.post('/', function(request, response) {
    /*console.log(request.body);
    let ok=true;
    let ok2=true;
    let mensagem ="Contato ["+request.body.nome+"] foi salvo com sucesso";
    let mensagememail ="Email ["+request.body.email+"] foi salvo com sucesso";


    if(request.body.nome==undefined || request.body.nome == ""){
        ok = false;
        mensagem = "Contato indefinido";
        if(request.body.nome == ""){
            mensagem = "Contato vazio"
        }
    }

    if(request.body.email==undefined || request.body.email == ""){
        ok = false;
        mensagememail = "Email indefinido";
        if(request.body.email == ""){
            mensagememail = "Email vazio"
        }
    }

    response.send({
        success:ok,
        error: {
            nome: mensagem, email: mensagememail}
    });
    */
    let ok = true;
    let mensagemverifica = "Contato salvo!"

    const inputs = [
    {
        atributo:"nome",
        texto:"A propriedade [nome] não deve estar em indefinida ou vazia!"
    },
    {
        atributo:"email",
        texto:"A propriedade [email] não deve estar em indefinida ou vazia!"
    },
    {
        atributo:"github",
        texto:"A propriedade [github] não deve estar em indefinida ou vazia!"
    }
    ];
    const checarObjetos=ObjetoRequeridosValidos(request,inputs);

    if (Array.isArray(checarObjetos)) {
        ok = false;

        mensagemverifica = checarObjetos.join(', ');
    }

    if(ok){
        saveContato(request.body);
    }

    response.send({
        success: ok,
        message: mensagemverifica
    });
});

export default router;