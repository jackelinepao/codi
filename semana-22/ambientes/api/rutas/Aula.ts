import { Router } from 'express';
import { postAula} from './../cotroladores/Aula'

export let aulas_router = Router();

aulas_router.post('/aulas', postAula)