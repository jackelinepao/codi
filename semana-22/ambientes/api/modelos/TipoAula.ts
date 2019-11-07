//modelo aula
import { DataTypes, Sequelize } from 'sequelize';

export let tipoaula_model = (sequelize:any) =>{
    let tipoaula = sequelize.define('t_TipoAula', {
        taula_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        taula_desc: {
            type: DataTypes.STRING(55),
            allowNull: false
        },
    }, {
        tableName: 't_TipoAula'
        ,
        timestamps: true
    })
    return tipoaula;
}