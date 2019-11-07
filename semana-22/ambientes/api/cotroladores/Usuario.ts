import {Request, Response} from 'express';
import {Usuario} from '../config/sequellize'

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export let crearUsuario = (req: Request, res: Response)=>{
    let objUsuario = Usuario.build(req.body.usuario);
    objUsuario.setSaltYHash(req.body.usuario.usu_pass);
    objUsuario.save().then((usuarioCreado:any)=>{
        Usuario.findByPk(usuarioCreado.usu_id).then((usuarioEncontrado:any)=>{
            res.status(201).json({
                message: 'Usuario creado',
                content: usuarioEncontrado
            })
        })
    }).catch((error:any)=>{
        res.status(501).json({
            message:'Error',
            content: error
        })
    })
}

export let encontrarUsuByNomOApe = (req: Request, res: Response)=>{

}

export let iniciarSesion = (req: Request, res: Response)=>{
    
}