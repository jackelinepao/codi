import express from 'express';
import { producto_router } from './../rutas/Producto';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { pruebaConexion } from '../config/sequelize'
import { sequelize } from '../config/sequelize'

export class Servidor {

  public app: express.Application;
  public puerto: number;

  constructor() {
    this.app = express();
    
    this.puerto = 3000;
    //bodyParser es un middleware que puede leer el body de mis peticiones
    //ya sea de forms o objetos json que me envie el cliente
    //bodyParser.json() - para leer objetos JSON
    this.app.use(bodyParser.json());
    //bodyParser.urlencoded para leer información de forms
    this.app.use(bodyParser.urlencoded({extended:true}));
    this.app.use(morgan('dev'));
    this.configurarRutas();
  }

  configurarRutas() {
    this.app.use(producto_router);
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log("Servidor corriendo correctamente en el puerto " + this.puerto);

      pruebaConexion();
      //force:true
      sequelize.sync({force:false}).then(()=>{
        console.log("Tablas creadas con exito");
        
      }).catch((error:any)=>{
        console.log("No se cre el codigo", error);
        
      })
    })
  }
}
