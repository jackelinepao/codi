import { Router } from "express";
import * as usuario_controlador from '../cotroladores/Usuario'


export let usuario_router = Router();

usuario_router.post('/usuario', usuario_controlador.crearUsuario)
usuario_router.post('/usuario/find', usuario_controlador.encontrarUsuByNomOApe)
usuario_router.post('/usuario/loggin', usuario_controlador.iniciarSesion)

// {
// 	"usuario":{
// 		"usu_nom": "Maria",
// 		"usu_ape": "Perez",
// 		"usu_email": "mar@gmail.com",
// 		"usu_pass": "123456"
// 	}
// }
