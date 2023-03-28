import { Router } from 'express';
const router = Router(); 

router.get('/', function(request, response) {
	response.send({
        api_nome:"api contatos",
        descricao:"Api para gestão de contatos",
        status:"OK!"
    });
})

router.get('/sobre', function(request, response) {
	response.send({
        nome:"Desenvolvedor: João Felipe",
        email:"joao@email.com",
        github:"Joaofelipem"
    });
})

export default router;