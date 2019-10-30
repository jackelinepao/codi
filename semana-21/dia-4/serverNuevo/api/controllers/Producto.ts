import {Request, Response} from 'express';
import { Producto, Empleado, Venta, DetalleVenta } from '../config/sequelize';

export var producto_controller = {
    getAll: (req:Request, res:Response) => {
        Producto.findAll().then((productos:any)=>{
            console.log("Obteneiendo los productos", productos);
            res.send({
                "message":"Productos Obtenidos",
                "content": productos
            })
        })
    }
}