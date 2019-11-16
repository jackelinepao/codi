import React, { Component, Fragment } from 'react';

const Formulario = (props) => {
    //Todo componente react obligatoriamente tiene que retornar algo
    let titulo = 'Titulo del Formulario'

    return ( 
        <Fragment>
            <h2>{titulo}</h2> 
            <h4>{props.subtitulo}</h4>
            <p>{props.descripcion}</p>
            <form>
                <input type = "text" />
            </form> 
        </Fragment>
    );
}

export default Formulario;