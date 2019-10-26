import express from 'express';
import { producto_router } from './../rutas/producto';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export class Servidor {
    public app: express.Application;
    public puerto: number;

    constructor(){
        this.app = express();
        this.puerto = 2000;
        this.app.use(bodyParser.json);
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
        this.configurarRutas();
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