import React from 'react';
import Formulario from './components/Formulario'
import Mascotas from './components/Mascotas'
import Tabla from './components/Tabla'

function App() {
  let mascotas = [{
    nombre: 'Scoby',
    tipo: 'Perro'
  },
  {
    nombre: 'Garfield',
    tipo: 'Gato'
  }
  ]
  let respuesta="No hay respuesta";
  let padre = (nombre)=>{
    console.log('Imprimiendo al padre');
    console.log(nombre);
    respuesta=nombre;
  }
  return (
    <div className="App" >
      <p>{respuesta}</p>
      <Formulario 
        subtitulo={'Formulario del Registro de Usuarios'} 
        descripcion={'Soy una descripcion del formulario'}/>
      <Mascotas mascotas={mascotas}/>
      <Tabla data={mascotas} funcion={padre}/>
    </div>
);
}
export default App;