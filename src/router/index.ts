import { Router } from 'express';
import  baseRouter  from './base';
import contatosRouter from './contatos';

const router = Router(); 

router.use('/', baseRouter);
//router.use('/sobre',baseRouter)
router.use('/contato', contatosRouter);

export default router;
