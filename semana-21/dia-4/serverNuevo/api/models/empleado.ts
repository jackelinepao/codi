import { Sequelize, Model, DataTypes } from "sequelize";

export var empleado_model = (sequelize:Sequelize, type:any)=>{
    class empleado_model extends Model {};

   // var empleado_model = sequelize.define('t_empleado',{
    empleado_model.init({
        emp_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        emp_nom:{
            type: DataTypes.STRING(100)
        },
        emp_ape:{
            type: DataTypes.STRING(100)
        },
        emp_dni: {
            type: DataTypes.STRING(8)
        }
    },{
        sequelize,
        modelName: 't_empleado',
        timestamps:false
    })
    return empleado_model;
}