import { Response, Request } from 'express';
import { Empleado, Venta } from '../config/sequelize';
import { create } from 'domain';
import e = require('express');
import { empleado_router } from '../rutas/Empleado';
import { empleado_model, mostrarDatos } from '../models/empleado';
export var empleado_controller = {
    getAll: (req:Request, res:Response)=>{
       Empleado.findAll({
           include:[
               {
                   model: Venta
               }
           ]
       }).then((empleados:any)=>{
           empleados.forEach((empleado:any) => {
               empleado.mostrarDatos
               
           });
            console.log("Empleados Obtenidos", empleados);
            res.status(200);
            res.send({
                succes: true,
                "message":"Empleados Obtenidos",
                "content":empleados
            })
            
       }).catch((error:any)=>{
            console.log(error);
            res.status(404);
            res.send({
                succes: false,
                "message":"Error al obtener los datos",
                "content": ' '
            })
       })
    },
    create: (req:Request, res:Response)=>{
        console.log(req.body);
        Empleado.create(req.body).then((empleadoCreado)=>{
            if(empleadoCreado){
                let respuesta = {
                    succes: true,
                    message: 'Usuario creado',
                    content: empleadoCreado
                }
                res.status(201).send(respuesta)
            }
        }).catch((error:any)=>{
            console.log("Error al crear empleado", error);
            res.status(500).send({
                succes: false,
                message: 'Error al crear el usuario',
                content: ' '
            })
            
        })
    },
    getById: (req:Request, res:Response)=>{
        let {id_empleado} = req.params;
        Empleado.findByPk(id_empleado).then((empleado)=>{
            if(empleado){
                let respuesta = {
                    succes: true,
                    message: 'Empleado encontrado',
                    content: empleado
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta = {
                    succes: false,
                    message: 'Error, empleado no encontrado',
                    content: ' '
                }
                res.status(404).send(respuesta);
            }
        }).catch((error:any)=>{
            console.log("Error al crear empleado", error);
            // res.status(404).send({
            //     succes: false,
            //     message: 'Error, empleado no encontrado',
            //     content: ' '
            // })
            
        })
        
    },
    deleteById: (req:Request, res:Response)=>{
        let {id_empleado} = req.params;

        Empleado.destroy({
            where:{
                emp_id:id_empleado
            }
        }).then((cantidad)=>{
            if (cantidad > 0) {
                console.log("cant: ", cantidad);
                let respuesta = {
                    succes: true,
                    message: 'usuario eliminado',
                    content: cantidad
                }
                res.status(200).send(respuesta);
            }else{
                let respuesta = {
                    succes: false,
                    message: 'ningún elemento eliminado',
                    content: ' '
                }
                res.status(400).send(respuesta);
            }
        }).catch((error:any)=>{
            console.log("Error al eliminar empleado", error);
            
        })
    },
    updateById: (req:Request, res:Response)=>{
        let {id_empleado} =req.params;
        Empleado.update(req.body,{
            where:{
                emp_id: id_empleado
            }
        }).then((cantidad:any)=>{
            if(cantidad > 0){
                let respuesta = {
                    succes: true,
                    message: 'registro actualizado',
                    content: cantidad
                }
                res.status(200).send(respuesta)
            }else{
                let respuesta = {
                    succes: false,
                    message: 'registro no actualizado',
                    content: cantidad
                }
                res.status(400).send(respuesta)
            }
        }).catch((error:any)=>{
            console.log("Error al registro no se edito", error);
            
        })
    }
}