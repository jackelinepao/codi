import React, { Component } from 'react';
import axios from 'axios';
import { URL_BACKEND } from '../../environments/environments';
import {withRouter} from 'react-router-dom'
import Swal from 'sweetalert2';

class EditarPabellon extends Component {
    state = {
        loading:true,
        error:null,
        pabellon:{}
    }
    manejarSubmit = (e) =>{
        e.preventDefault();
        if(this.state.pabellon.pabellon_nom.trim() === ''){
            this.setState({
                error: true
            })
        }else{
            let misHeaders = {
                "Content-Type": "application/json"
            };
            let data = {
                pabellon:{
                    ...this.state.pabellon
                }
            }
            axios.put(`${URL_BACKEND}api/pabellon`,data, {misHeaders}).then(rpta=>{
                if(rpta.status === 200){
                    Swal.fire(
                        'Actualizado',
                        'pacellon actualizado correctamente',
                        'success'
                    )
                }else{
                    console.log("error al actualizar");
                    
                }
            })
        }
    }
    manejarCambio = (e) =>{
        this.setState({
            pabellon: {
                ...this.state.pabellon,
                [e.target.name] : e.target.value
            }
        })
    }
    componentDidMount(){
        this.obtenerData();
    }
obtenerData = (e) =>{
    this.setState({loading:true,error:null});
    const id = this.props.match.params.pabId;
    axios.get(`${URL_BACKEND}api/pabellon/${id}`).then(
        rpta =>{
            
            this.setState({loading:false, pabellon:rpta.data.pabellon});
    }).catch(error=>{
        this.setState({loading:false, error:error
        })
    });

}

  render() {
      if(this.state.loading){
          return '...Cargando'
      }
    return (
      <div className="conttainer mt-4">
          <div className="row">
              <div className="col-12">
                  <h2>Actualizar Datos</h2>
                  <form onSubmit={this.manejarSubmit}>
                      <div className="form-group">
                          <label htmlFor="">
                              Nombre de Pabellón
                          </label>
                          <input type="text" name="pabellon_nom" onChange={this.manejarCambio} id="" value={this.state.pabellon.pabellon_nom} className="form-control"/>
                      </div>
                      <button className="btn btn-primary">
                        Guardar Cambios
                    </button>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}
export default withRouter(EditarPabellon)