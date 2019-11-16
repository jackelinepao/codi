import React, { Component } from 'react';
import { URL_BACKEND } from '../../environments/environments';
import { MDBDataTable } from 'mdbreact';
import {Link} from 'react-router-dom';

export default class Pabellon extends Component {
  constructor(props){
    super(props);
    this.state = {
      cargando: true,
      data: {}
    }
  }
  async cargarPabellones(){
    let response = await fetch(`${URL_BACKEND}api/pabellon`);
    let pabellonesJSON = await response.json();
    console.log(pabellonesJSON.content);
    let filas = [];
    pabellonesJSON.content.forEach((pabellon, i)=>{
      let objFila = {
        nro: (i + 1),
        pabellon_id: pabellon.pabellon_id,
        pabellon_nom: pabellon.pabellon_nom,
        createdAt: pabellon.createdAt,
        updatedAt: pabellon.updatedAt,
        actions: <Link className="btn btn-info" to={`/pabellones/${pabellon.pabellon_id}/edit`}>Editar</Link> 

      }
      filas.push(objFila);
    })
    let data = {
      columns: [
        {
          label:"#",
          field: "nro",
          sort: "asc"

        },
        {
          label:"Id",
          field: "pabellon_id",
          sort: "asc"
        },
        {
          label:"Name",
          field: "pabellon_nom",
          sort: "asc"
        },
        {
          label:"Fecha de Creación",
          field: "createdAt",
          sort: "asc"
        },
        {
          label:"Fecha de Actualización",
          field: "updatedAt",
          sort: "asc"
        },{
          label: "Acciones",
          field: 'actions',
          sort:'asc'
        }
      ],
      rows: filas
    }
    this.setState(
      {
        cargando: false,
        data: data
      }
    )
    
  }
  render() {
    if(this.state.cargando ===true){
      return(
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-12">
            <h1>Cargando...</h1>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-12">
            {
              this.state.data.length === 0 ?(<div>No hay datos</div>):
              (
                <MDBDataTable
              striped
              bordered
              hover
              data={this.state.data}
            />
              )
            }
            
            </div>
          </div>
        </div>
    );
  }
  componentDidMount(){
    this.cargarPabellones();
  }
}
