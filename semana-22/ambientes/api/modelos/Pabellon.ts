//modelo aula
import { DataTypes } from 'sequelize';

export let pabellon_model = (sequelize:any) =>{
    let pabellon = sequelize.define('t_pabellon', {
        pabellon_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        pabellon_nom: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
    }, {
        tableName: 't_pabellon',
        timestamps: true
    })
    return pabellon;
}