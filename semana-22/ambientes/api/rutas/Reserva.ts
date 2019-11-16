import { Router } from "express";
import { getReservaByFechas } from "../cotroladores/Reserva";
import { guard } from "../utils/Guards";


export let reserva_router = Router();

reserva_router.post('/reservabyfechas/:aula_id', guard, getReservaByFechas)
