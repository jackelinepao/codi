import React,{Component} from 'react';
import Navbar from './components/Navbar'
import Productos from './components/Productos'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            productos: [
                { id: 1, nombre: 'Leche Gloria', precio: '4.20' },
                { id: 2, nombre: 'Arroz', precio: '2.10' },
                { id: 3, nombre: 'Manjar', precio: '5.30' },
            ],
            producto: {}
        }
    }
    render(){
        return ( 
          <div className = "App" >
            <Navbar marca = "Codigo" > </Navbar> 
            <Productos productos={this.state.productos}/>
            </div >
        );
    }
}

export default App;