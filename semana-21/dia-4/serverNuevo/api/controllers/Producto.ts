import {Request, Response} from 'express';
import { Producto, Empleado, Venta, DetalleVenta } from '../config/sequelize';

export var producto_controller = {
    getAll: (req:Request, res:Response) => {
        Producto.findAll().then((productos:any)=>{
            console.log("Obteneiendo los productos", productos);
            res.status(200);
            res.send({
                succes: true,
                "message":"Productos Obtenidos",
                "content": productos
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
    }
}