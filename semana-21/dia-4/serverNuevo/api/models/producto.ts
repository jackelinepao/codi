import { Sequelize, Model, DataTypes } from 'sequelize';

export var producto_model = (sequelize:Sequelize,
    type:any)=>{
        class producto_model extends Model {};

        //var producto_model = sequelize.define('t_producto', {
        producto_model.init({
            prod_id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            prod_nom:{
                type: DataTypes.STRING(45)
            },
            prod_descr:{
                type: DataTypes.STRING(100)
            },
            prod_price:{
                type: DataTypes.DECIMAL(5,2)    
            },
        },
        {
            sequelize,
            modelName: 't_producto',
            timestamps:false
        });
        return producto_model;
    }