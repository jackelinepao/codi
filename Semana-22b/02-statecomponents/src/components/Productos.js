            import React, { Component } from 'react';

export default class Productos extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor de los productos");
        this.state = {
            productos: props.productos,
            producto: {}
        }

    }
    seleccionarProducto = (prod) => {
        console.log(prod);
        this.setState({
            producto: prod
        })

    }
    componentDidMount() {
        //funciona luego del render cuando todo el dom ya ha sido cargada con exito
        //se usa generalmente para traer data mediante las API's y setear objetos jquery, como el datepicker, modales, datatables
        console.log("Producto componentDidMount");

    }
    generarAletorio=(e) =>{
        let productoTemporal = {
            id: Math.floor(Math.random()*(50-5))+5,
            nombre: "Producto Aleatorio",
            precio: Math.random()*(10000-1000)+1000,
        };
        this.setState({
            productos: [...this.state.productos, productoTemporal]
        })
    };
    render() {
        console.log("Productos Render");
        let{productos}=this.state;
        //table.table>thead>tr>th*4^^tbody
        return ( <div> <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((p, indice)=>(
                        <tr key={indice}>
                            <td>{p.id}</td>
                            <td>{p.nombre}</td>
                            <td>{p.precio}</td>
                            <td>
                                <button onClick={()=>{
                                    this.seleccionarProducto(p)
                                }} className="btn btn-block btn-success">Seleccionar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        {
            this.state.producto.nombre ? (<p>Producto Seleccionado: {this.state.producto.nombre}</p>):(<p>Producto no seleccionado</p>)
            
        }
        <button onClick={this.generarAletorio}>Generar un producto Aleatorio</button>
        </div>
        );
    }
}