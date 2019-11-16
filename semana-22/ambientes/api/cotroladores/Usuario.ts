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
    let busqueda = req.body.busqueda;
    Usuario.findAll({
        where: {
            [Op.or]:[
                {
                    usu_nom: {
                        [Op.substring]: busqueda
                    }
                },
                {
                    usu_ape: {
                        [Op.substring]: busqueda
                    }
                }
            ]
        }
    }).then((rpta:any)=>{
        res.json(rpta);
    })
}

export let iniciarSesion = (req: Request, res: Response)=>{
    let {usu_email, usu_pass} = req.body;
    let buff = Buffer.from(usu_pass,'utf-8').toString('ascii');

    Usuario.findOne({
        where: {
            usu_email: usu_email
        }
    }).then((ObjUsuario:any)=>{
        if(ObjUsuario){
            let validarPass = ObjUsuario.validPass(buff);
            if (validarPass) {
                let token = ObjUsuario.generarJWT();
                res.status(200).json({
                    message: 'Ok',
                    token
                })
            }else{
                res.status(500).json({
                    message: 'error',
                    content: 'Usuario o contraseña incorrectos.'
                })
            }
        }else{
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el usuario'
            })
        }
    })
}