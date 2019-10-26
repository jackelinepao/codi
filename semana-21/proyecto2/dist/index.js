"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm init
//npm start
//tsc --init
//tsc
//tsc -w
//npm i express
//herramientas de desarrollo
//npm i -D @types/express
//npm i -D @types/node
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/api', (req, res) => {
    console.log(req.query);
    res.status(201);
    res.send({
        "operation": "Exito",
        "message": "Factura creada con éxito"
    });
    res.send("Hola soy la Api en TS");
});
const port = 2000;
//escuchando
app.listen(port, () => {
    console.log(`servidor corriendo en el puert ${port}`);
});
