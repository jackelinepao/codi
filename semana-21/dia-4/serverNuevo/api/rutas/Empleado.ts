import { Router } from 'express';
import { empleado_controller} from '../controllers/Empleado'

export let empleado_router = Router();

empleado_router.get('/empleado', empleado_controller.getAll)
empleado_router.post('/empleado', empleado_controller.create)
empleado_router.get('/empleado/:id_empleado', empleado_controller.getById)
empleado_router.delete('/empleado/:id_empleado', empleado_controller.deleteById)
empleado_router.put('/empleado/:id_empleado', empleado_controller.updateById)
empleado_router.post('/empleado/actualizar/:id_empleado', empleado_controller.updateById)