import { RouterModule, Routes} from '@angular/router'
import { ListadoComponent } from './components/listado/listado.component'
import { CarritoComponent } from './components/carrito/carrito.component'

const RUTAS: Routes = [
    {
        path: '',
        component: ListadoComponent
    },
    {
        path: 'carrito', 
        component: CarritoComponent
    }
];
export const MISRUTAS = RouterModule.forRoot(RUTAS);