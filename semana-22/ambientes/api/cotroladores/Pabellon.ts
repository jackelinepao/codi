import { Request, Response } from "express";
import { Pabellon, Aula, TipoAula } from './../config/sequellize'
import { pabellon_router } from "../rutas/Pabellon";

export let getPabellones = (req:Request, res:Response)=>{
    Pabellon.findAll().then((objPabellones:any)=>{
        res.status(200).json({
            message: 'ok',
            content: objPabellones
        })
    })
}

export let postPabellon = (req:Request, res:Response)=>{
    const objPabellon = Pabellon.build(req.body);
    // el body y el modelo tiene que coincidir
    // const objPabellon = Pabellon.build({
    //     pabellon_nom: req.body.pabellon_nom
    // })
    // guardando el objeto pabellon
    if(!req.body.pabellon_nom){
        res.status(400).json({
            ok: false,
            message: 'No se recibieron todos los campos en el request',
            content: ''
        })
        return;
    }
    objPabellon.save().then((objPabellonCreado:any)=>{
        res.status(201).json({
            ok: true,
            content: objPabellonCreado,
            message: 'Pabellon creado correctamente'
        })
    }).catch((error:any)=>{
        console.log(error);
        res.status(500).json({
            ok: false,
            message:"Error al obtener los datos",
            content: ' '
        })
    })
    
}

export let getPabellonesById = (req:Request, res:Response)=>{
    Pabellon.findByPk(req.params.id).then((objPabellon:any)=>{
        if (objPabellon) {
            res.status(200).json({
                message: 'ok',
                pabellon: objPabellon
            })
        }else{
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el pabellon'
            })
        }
    }).catch((error:any)=>{
        console.log(error);
        res.status(500).json({
            ok: false,
            message:"Error al obtener los datos",
            content: ''
        })
    })
}

export let updatePabellon = (req:Request, res:Response)=>{
    Pabellon.update(
        {
            pabellon_nom: req.body.pabellon.pabellon_nom
    
        },
        {
            where: {
                pabellon_id: req.body.pabellon.pabellon_id
            }
        }).then((pabActualizado:any)=>{
            Pabellon.findByPk(pabActualizado[0]).then((objPabellon:any)=>{
                 res.status(200).json({
                    message:'ok',
                    content: objPabellon
                })
            })
           
        }).catch((error:any)=>{
            res.status(501).json({
                message:"error",
                content: error
            })
        })
}
export let getAulasXPabellon = (req:Request, res:Response)=>{
    Pabellon.findAll({
        include:[{
            model: Aula
        }]
    }).then((resultado:any)=>{
        res.status(200).json({
            message: 'ok',
            content: resultado
        })
    })
}

export let getAulasByPabellonId = (req:Request, res:Response)=>{
    Pabellon.findAll({
        where:{
            pabellon_id: req.params.id
        },
        include: [{
            model:Aula,
            include:[{
                model: TipoAula
            }]
        }]
    }).then((resultado: any)=>{
        res.status(200).json({
            message: 'ok',
            content: resultado
        })
    })
}