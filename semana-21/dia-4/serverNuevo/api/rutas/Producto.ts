import { Router } from 'express';
//import { getProductos, getProductoById, createdProduct} from './../controladores/Producto'
import { producto_controller } from '../controllers/Producto'

export let producto_router = Router();

producto_router.get('/producto', producto_controller.getAll)

// producto_router.get('/productos', getProductos);
// producto_router.get('/productos/:idProducto', getProductoById);
// producto_router.post('/productos', createdProduct)

// producto_router.get("/productos", (req, res) => {
//     res.send("entregando la lista de productos")
// })