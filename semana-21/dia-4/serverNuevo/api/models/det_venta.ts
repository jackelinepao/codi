import { Sequelize, Model, DataTypes } from "sequelize";

export var det_venta_model = (sequelize:Sequelize, type:any)=>{
    class det_venta_model extends Model {};

   // var empleado_model = sequelize.define('t_empleado',{
    det_venta_model.init({
        dv_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        dv_cant:{
            type: DataTypes.INTEGER()
        },
        dv_punit:{
            type: DataTypes.FLOAT()
        },
        dv_importe: {
            type: DataTypes.FLOAT()
        }
    },{
        sequelize,
        modelName: 't_detalle_venta',
        timestamps:false
    })
    return det_venta_model;
}