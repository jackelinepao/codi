import { Request, Response } from "express";
import { Reserva } from "../config/sequellize";

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

export let getReservaByFechas = (req:Request, res:Response)=>{
    let {aula_id} = req.params;
    let {fechin, fechfin} = req.body;
    Reserva.findAll({
        where:{
            res_fechin:{
                [Op.gte]: fechin
            },
            res_fechfin:{
                [Op.lte]: fechfin
            },
            aula_id: aula_id
        }
    }).then((reserva: any)=>{
        if (reserva) {
            res.status(200).json(reserva)
        }else{
            res.status(404).json({
                message: "Error",
                content: "No se encontro las reservas para esta aula"
            })
        }
    })
}