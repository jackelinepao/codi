import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link , Redirect} from 'react-router-dom'
import Pabellon from './components/pabellon/Pabellon';
import Reserva from './components/reserva/Reserva'
import Registro from './components/registro/Registro'
import EditarPabellon from './components/editarPabellon/EditarPabellon';
import PageError from './components/pageError/PageError';
import { AuthService } from './services/Auth';
import Login from './components/login/Login';

export default class componentName extends Component {
  _sAuth = new AuthService();
  constructor(props){
    super(props);
    if(this._sAuth.isLogged()){
      this.state = {
        isLogged: true
      }
    }else{
      this.state = {
        isLogged: false
      }
    }
    this.signin.bind(this);
  }


  signin = (email, pass) =>{
    this._sAuth.Login(email, pass).then(rpta => {
      console.log(rpta);
      if(rpta.status === 2000){
        this._sAuth.guardarToken(rpta.data.token);
        this.setState({
          isLogged:true
        })
      }
      
    })
  }
  render() {
    return (
      <Fragment>
        {/* Todos los componentes que van a estar 
        afectos al sistema de enrutamiento, deben estar en el
        componente Router */}
        <Router>
          <Header />
          {/* El componente Switch es como un <router-outlet> en Angular */}
          <Switch>
            <Route esxact path={"/"} component={Login} render={()=>{
              if(this.state.isLogged){
                return <Pabellon/>
              }else{
                return <Redirect to={{pathname: "/login"}} />
              }
            }}/>
            <Route exact path={"/pabellones"} component={Pabellon} />
            <Route exact path={"/reservas"} component={Reserva} />
            <Route exact path={"/registro"} component={Registro} />
            <Route exact path={"/pabellones/:pabId/edit"} component={EditarPabellon}/>
            <Route component={PageError   }/>
          </Switch>

        </Router>
      </Fragment>
    );
  }
}