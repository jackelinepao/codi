//import Vehiculo from "./vehiculo.mjs";

//1.
// const {Vehiculo} = require('./vehiculo')
//const {Vehiculo, Avion} = require('./vehiculo')
//2.
// const Camioneta = new Vehiculo('Camioneta 4x4', 'Hyundai');
// const AvionComercial = new Avion();
// Camioneta.ImprimirVehiculo();
// AvionComercial.ImprimirVehiculo();
//3.
// import { Avion, Vehiculo, Barco } from './vehiculo.mjs'

// const Camioneta = new Vehiculo('Camioneta 4x4', 'Hyundai');
// const AvionComercial = new Avion();
// const Barcoc = new Barco();
// Camioneta.ImprimirVehiculo();
// AvionComercial.ImprimirVehiculo();
// Barcoc.ImprimirVehiculo();
//4. Impportando por fefault
// import Vehiculo, {Avion, Barco} from './vehiculo.mjs'

// const Camioneta = new Vehiculo('Camioneta 4x4', 'Hyundai');
// const AvionComercial = new Avion();
// const Barcoc = new Barco();
// Camioneta.ImprimirVehiculo();
// AvionComercial.ImprimirVehiculo();
// Barcoc.ImprimirVehiculo();
//5. importando todo como transportes
import * as Transportes from './vehiculo.mjs'

const Camioneta = new Transportes.Vehiculo('Camioneta 4x4', 'Hyundai');
const AvionComercial = new Transportes.Avion();
const Barcoc = new Transportes.Barco();
Camioneta.ImprimirVehiculo();
AvionComercial.ImprimirVehiculo();
Barcoc.ImprimirVehiculo();