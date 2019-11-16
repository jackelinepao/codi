//modelo aula
import { DataTypes, Sequelize } from 'sequelize';

export let persona_model = (sequelize:any) =>{
    let alquiler = sequelize.define('t_alquiler', {
        alqui_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        alqui_fech: {
            type: DataTypes.DATE,
            allowNull: false
        },
        alqui_fechin: {
            type: DataTypes.DATE,
            allowNull: false
        },
        alqui_fechfin: {
            type: DataTypes.DATE,
            allowNull: false
        },

        alqui_cost: {
            type: DataTypes.DECIMAL(10, 2)
        },
        alqui_est: {
            type:  DataTypes.STRING(45)
        }
    }, {
        tableName: 't_alquiler',
        timestamps: false
    })
   
    return alquiler;
}