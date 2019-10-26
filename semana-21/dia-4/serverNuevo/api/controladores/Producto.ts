
//marcoxjocks
import { Request, Response } from 'express'
import { listaProductos} from '../seeders/dbProductos'

export let getProductos = (req: Request, res: Response) => {
    //validar si hay datos para enviar la respuesta
    res.status(200);
    res.send({
        "success": true,
        "message": "Lista de Productos",
        "content": listaProductos
    });
}

export let getProductoById = (req: Request, res: Response) =>{

    console.log(req.params.getProducto);
    let idRecibido = parseInt(req.params.idproducto);
    console.log(idRecibido);
    
    for (let i = 0; i < listaProductos.length; i++) {
        if (idRecibido === listaProductos[i].id) {
            res.status(200);
            res.send({
                "success": true,
                "message": "Producto encontrado",
                "content": listaProductos[i]
            });
            return;
        }else{
            res.status(404);
            res.send({
                "success": false,
                "message": "Producto no existe",
                "content": ""
            });
        }
        
    }
}

export let createdProduct = (req: Request, res: Response)=>{
    console.log(req.body);
    listaProductos.push(req.body);
    res.status(201);
    res.send({
        success: true,
        message: "Producto creado",
        content: listaProductos
    })
}