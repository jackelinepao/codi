import React, { Component, Fragment } from 'react';

const Tabla = (props) => {
    let llamarAlPadre=(e)=>{
        props.funcion();
    }
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Tipo</td>
                    </tr>
                </thead>
                <tbody>
                    {/* {props.data.map((m, indice)=>{
                        return(<tr key={indice}>
                            <td>{m.nombre}</td>
                            <td>{m.tipo}</td>
                        </tr>) 
                    })} */
                        props.data.map((m, indice)=>(
                            <tr key={indice}>
                                <td>{m.nombre}</td>
                                <td>{m.tipo}</td>
                                <td><button onClick={()=>{
                                    props.funcion(m.nombre)
                                }}>Enviar {m.nombre}</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={llamarAlPadre}>
                    Referencia a una funcion
            </button>
            <button onClick={()=>{
                props.funcion("sdsdf")
            }}>
                Click al padre | enviar datos a una funcion padre
            </button>
        </Fragment>  
    );
}

export default Tabla;