import { RouterModule, Routes }from '@angular/router';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

const MIS_RUTAS: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'facturas',
        component: FacturasComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
]; 

export const RUTAS = RouterModule.forRoot(MIS_RUTAS); 