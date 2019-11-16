//modelo aula
import { DataTypes, Sequelize } from 'sequelize';

export let persona_model = (sequelize:any) =>{
    let persona = sequelize.define('t_persona', {
        per_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        per_nom: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        per_ape: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        per_dir: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        per_tef: {
            type: DataTypes.STRING(50)
        }
    }, {
        tableName: 't_persona',
        timestamps: false
    })
   
    return persona;
}