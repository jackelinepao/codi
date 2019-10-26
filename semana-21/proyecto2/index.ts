//npm init
//npm start
//tsc --init
//tsc
//tsc -w
//npm i express
//herramientas de desarrollo
//npm i -D @types/express
//npm i -D @types/node
import express from 'express';
import bodyParser from 'body-parser';
const app = express();

app.get('/api', (req, res) => {
    
    console.log(req.query);
    
    res.status(201);
    res.send({
        "operation":"Exito",
        "message": "Factura creada con éxito"
    })
    res.send("Hola soy la Api en TS")
})
const port = 2000;

//escuchando
app.listen(port, ()=>{
    console.log(`servidor corriendo en el puert ${port}`);
    
})