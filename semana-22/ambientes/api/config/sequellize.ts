//https://remotemysql.com/databases.php
import { pabellon_model } from "../modelos/Pabellon";
import { aula_model } from "../modelos/Aula";
import { tipoaula_model } from "../modelos/TipoAula";
import { usuario_model } from "../modelos/Usuario";
import { reserva_model } from "../modelos/Reserva";

const Sequelize = require("sequelize");

export const sequelize = new Sequelize(
    // 'LDv0pN4uWQ',//database name
    // 'LDv0pN4uWQ',//username
    // 'JGnf7mu1Ya', //password
    'aulas',
    'root',
    'root',
    {
    //host: 'remotemysql.com',//server name: remotemysql.com:3306
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    dialectOption: {
        useUTC: false,
        dateStrings: true,
        typeCast: true
    }
});
//otra forma de conectarse
//export const conexion2 = new Sequelize('mysql://root:root@localhost:3306/aulas)

export const Pabellon = pabellon_model(sequelize);
export const Aula = aula_model(sequelize);
export const TipoAula = tipoaula_model(sequelize);
export const Usuario = usuario_model(sequelize);
export const Reserva = reserva_model(sequelize)

Pabellon.hasMany(Aula, {foreignKey: "pabellon_id"}),
Aula.belongsTo(Pabellon, {foreignKey: "pabellon_id"}),

Aula.hasMany(Reserva, {foreignKey: "aula_id"}),
Reserva.belongsTo(Aula,{foreignKey: "aula_id"}),

Usuario.hasMany(Reserva,{foreignKey: "usu_id"}),
Reserva.belongsTo(Usuario,{foreignKey: "usu_id"}),

TipoAula.hasMany(Aula, {foreignKey: "taula_id"}),
Aula.belongsTo(TipoAula, {foreignKey: "taula_id"})

