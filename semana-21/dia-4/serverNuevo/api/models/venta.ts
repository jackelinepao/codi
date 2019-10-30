import { Sequelize, Model, DataTypes } from "sequelize";

export var venta_model = (sequelize:Sequelize, type:any)=>{
    class venta_model extends Model {};

   // var empleado_model = sequelize.define('t_empleado',{
    venta_model.init({
        vent_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vent_fecha:{
            type: DataTypes.DATE()
        },
        vent_subtotal:{
            type: DataTypes.FLOAT()
        },
        ven_montoigv: {
            type: DataTypes.FLOAT()
        },
        ven_total: {
            type: DataTypes.FLOAT()
        }
    },{
        sequelize,
        modelName: 't_venta',
        timestamps:false
    })
    return venta_model;
}