import express from 'express';
import { producto_router } from './../rutas/producto';

export class Servidor {
    public app: express.Application;
    public puerto: number;

    constructor(){
        this.app = express();
        this.configurarRutas();
        this.puerto = 3000;
    }
    configurarRutas(){
        this.app.use(producto_router)
    }
    start(){
        this.app.listen(this.puerto, ()=>{
            console.log('servidor corriendo correctamente ' + this.puerto);            
        })
    }
}