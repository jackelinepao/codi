import React, { Component } from 'react';
import axios from 'axios';
import { URL_BACKEND } from '../../environments/environments';
import Swal from 'sweetalert2';
import {withRouter} from 'react-router-dom'

class Formulario extends Component {
    // escucharCambios = (e)=>{
    //     console.log({value: e.target.value,
    //     name:e.target.name});
        
    // }
    state ={
        nombrePabellon:'',
        error: false
    }
    escucharClick = (e)=>{
        console.log("se hizo click");
        
    }
    escucharSubmit = (e)=>{
        e.preventDefault();
        if(this.props.formValues.nombrePabellon.trim() == ''){
            if(!this.state.error){
                this.setState({
                    error: true
                });
            }
        }else{
            if(this.state.error){
                this.setState({
                    error: false
                });
            }
            let misHeaders = {
                "Content-Type": "application/json"
            }
            let data = {
                pabellon_nom: this.props.formValues.nombrePabellon
            }
            axios.post(`${URL_BACKEND}api/pabellon`, data, {headers:misHeaders}).then((respuesta)=>{
                if(respuesta.status == 201){
                    console.log("Pabellon creado");
                    Swal.fire(
                        'Pabellon Creado',
                        'Exito al creado el pabellon',
                        'success'
                    ).then(()=>{
                        this.props.history.push('/pabellones');
                    })
                }else{
                    console.log("error algo ha pasado");
                    
                }
            })
        }
    }
    manejarCambios = (e)=>{
        this.setState({
            //nombrePabellon: e.target.value
            [e.target.name]: e.target.value
        })
    }
  render() {
    return (
      <div>
          <h4>Nuevo Registro</h4>
          <form onSubmit={this.escucharSubmit}>
              <div className="form-group">
                  <label htmlFor="">Nombre Pabellón</label>
                  <input 
                  onChange={this.props.onChange} 
                  className="form-control" type="text" name="nombrePabellon" id=""
                  value={this.props.formValues.nombrePabellon}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Encargado</label>
                  <input 
                  onChange={this.props.onChange} 
                  className="form-control" type="text" name="encargado" id=""
                  value={this.props.formValues.encargado}/>
              </div>
              <div className="form-group">
                  <label htmlFor="">Area</label>
                  <input 
                  onChange={this.props.onChange} 
                  className="form-control" type="text" name="area" id=""
                  value={this.props.formValues.area}/>
              </div>
              <button type="submit" className="btn btn-primary">Guardar</button>
          </form>
      </div>
    );
  }
}
export default withRouter(Formulario);