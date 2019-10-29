import { Sequelize } from 'sequelize';

//Sequelize necita para conectarse ('base de datos', usuario, contraseña,{opciones adicionales})
export const sequelize = new Sequelize('tienda', 'root', 'root',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
})
export const pruebaConexion = () =>{
    sequelize.authenticate()
    .then(()=>{
        console.log("Nos hemos conectado a la BD de forma correcta :D");
        
    }).catch((error:any)=>{
        console.log("No se pudo conectar a la BD :( ", error);
        
    })
}