import { Sequelize } from 'sequelize';
import { producto_model } from '../models/producto';
import { empleado_model } from '../models/empleado';
import { venta_model } from '../models/venta'
import { det_venta_model } from '../models/det_venta'
import e = require('express');


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
export const Producto = producto_model(sequelize, Sequelize);
export const Empleado = empleado_model(sequelize, Sequelize);
export const Venta = venta_model(sequelize, Sequelize)
export const DetalleVenta = det_venta_model(sequelize, Sequelize);

Venta.belongsTo(Empleado, {foreignKey: 'emp_id'});
Empleado.hasMany(Venta,{foreignKey:'emp_id'})

DetalleVenta.belongsTo( Venta, {foreignKey: 'vent_id'});
Venta.hasMany(DetalleVenta, {foreignKey:'vent_id'});

DetalleVenta.belongsTo(Producto, {foreignKey: 'prod_id'});
Producto.hasMany(DetalleVenta, {foreignKey: 'prod_id'})
