import express, { Request, Response } from 'express';
import { sequelize } from '../config/sequellize';
import { pabellon_router } from '../rutas/Pabellon';
import { aulas_router } from '../rutas/Aula'

let bodyParser = require('body-parser');
const swaggerUi = require ('swagger-ui-express') ;
import * as swaggerDocument from './../apiDocs/documentacion.json';
import { usuario_router } from '../rutas/Usuario';

export class Server {
  public app: express.Application;
  public puerto: any;
  constructor() {
    this.app = express();
    // obtener el puerto que nos asignará heroku
    // o establer por defecto el puerto 3000
    this.puerto = process.env.PORT || 3000;
    this.configurarBodyParser();
    this.configurarRutas();
  }

  configurarBodyParser(){
    this.app.use(bodyParser.json());
  }
  configurarRutas() {
    // configurando una ruta por defecto o de prueba
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send("BIENVENIDO AL SERVIDOR");
    });
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use('/api',pabellon_router, aulas_router, usuario_router);


  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor OK en el puerto ${this.puerto}`);
      sequelize.sync({force: false}).then(()=>{
        console.log("Base de datos correctamente");
        
      })
    });
  }

}