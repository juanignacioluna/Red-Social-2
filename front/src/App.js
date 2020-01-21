import React from 'react';
import './App.css';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Perfil from './componentes/Perfil';
import Notis from './componentes/Notis';
import Timeline from './componentes/Timeline';
import Buscar from './componentes/Buscar';
import 'bulma/css/bulma.css';
import $ from "jquery";
import OtroPerfil from './componentes/OtroPerfil';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
          
        
        logueando: true, 

        session: false,

        perfil: false,

        notis: false,

        buscar: false,

        otroPerfil: false


    
        };
      this.handleBUSCARClick = this.handleBUSCARClick.bind(this);
      this.handleOTROPERFIL = this.handleOTROPERFIL.bind(this);
      this.handleREGISTROClick = this.handleREGISTROClick.bind(this);
      this.handleLOGINClick = this.handleLOGINClick.bind(this);
      this.handleTIMELINEClick = this.handleTIMELINEClick.bind(this);
      this.handlePERFILClick = this.handlePERFILClick.bind(this);
      this.handleNOTISClick = this.handleNOTISClick.bind(this);
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }))
          .catch(err => err);
  }

  componentDidMount() {
      this.callAPI();
  }


  handleREGISTROClick() {
    this.setState({
      
      logueando: false, 

      session: false,

      perfil: false,

      notis: false,

      buscar: false,

      otroPerfil: false
    
    
    
    });

  }

  handleOTROPERFIL(){

    this.setState({
      
      logueando: false, 

      session: false,

      perfil: false,

      notis: false,

      buscar: false,

      otroPerfil: true
    
    
    });

  }

  handleLOGINClick() {

    this.setState({
      
      
      logueando: true, 

      session: false,

      perfil: false,

      notis: false,

      buscar: false,

      otroPerfil: false
    
    
    
    
    });

  }

  handleBUSCARClick() {

    this.setState({
      
      
      logueando: false, 

      session: false,

      perfil: false,

      notis: false,

      buscar: true,

      otroPerfil: false
    
    
    
    
    });

  }

  handleTIMELINEClick() {

    this.setState({
      
      logueando: false, 

      session: true,

      perfil: false,

      notis: false,

      buscar: false,

      otroPerfil: false
    
    
    });

  }


  handlePERFILClick() {

    this.setState({
      
      logueando: false, 

      session: false,

      perfil: true,

      notis: false,

      buscar: false,

      otroPerfil: false
  
  });

  }



  handleNOTISClick() {

    this.setState({
      
      logueando: false, 

      session: false,

      perfil: false,

      notis: true,

      buscar: false,

      otroPerfil: false
  
  });

  }

  render() {

    $(document).ready(function() {
            

            $('#navbar-burger-id').click(function () {
                if($('#navbar-burger-id').hasClass('is-active')){
                $('#navbar-burger-id').removeClass('is-active');
                $('#navbar-menu-id').removeClass('is-active');
                }else {
                $('#navbar-burger-id').addClass('is-active');
                $('#navbar-menu-id').addClass('is-active');
                }
            });

      });



        const logueando = this.state.logueando;
        let loginRegistro;
        if (logueando) {

            loginRegistro = <Login handleTIMELINEClick={this.handleTIMELINEClick} handleREGISTROClick={this.handleREGISTROClick} />;

        } else {

            loginRegistro = <Registro handleTIMELINEClick={this.handleTIMELINEClick} handleLOGINClick={this.handleLOGINClick} />;

        }


        const session = this.state.session;


        if (session) {

            loginRegistro = <Timeline handleOTROPERFIL={this.handleOTROPERFIL} handleBUSCARClick={this.handleBUSCARClick} handleLOGINClick={this.handleLOGINClick} handleNOTISClick={this.handleNOTISClick} handlePERFILClick={this.handlePERFILClick} />;

        }



        const perfil = this.state.perfil;


        if (perfil) {

            loginRegistro = <Perfil handleOTROPERFIL={this.handleOTROPERFIL} handleBUSCARClick={this.handleBUSCARClick} handlePERFIL2Click={this.handlePERFIL2Click} handlePERFILClick={this.handlePERFILClick} handleLOGINClick={this.handleLOGINClick} handleNOTISClick={this.handleNOTISClick} handleTIMELINEClick={this.handleTIMELINEClick} />;

        }



        const notis = this.state.notis;


        if (notis) {

            loginRegistro = <Notis handleBUSCARClick={this.handleBUSCARClick} handleLOGINClick={this.handleLOGINClick} handleTIMELINEClick={this.handleTIMELINEClick} handlePERFILClick={this.handlePERFILClick} />;

        }



        const buscar = this.state.buscar;


        if (buscar) {

            loginRegistro = <Buscar handleOTROPERFIL={this.handleOTROPERFIL} handleBUSCARClick={this.handleBUSCARClick} handlePERFIL2Click={this.handlePERFIL2Click} handlePERFILClick={this.handlePERFILClick} handleLOGINClick={this.handleLOGINClick} handleNOTISClick={this.handleNOTISClick} handleTIMELINEClick={this.handleTIMELINEClick} />;

        }


        const otroPerfil = this.state.otroPerfil;


        if (otroPerfil) {

            loginRegistro = <OtroPerfil handleOTROPERFIL={this.handleOTROPERFIL} handleBUSCARClick={this.handleBUSCARClick} handlePERFIL2Click={this.handlePERFIL2Click} handlePERFILClick={this.handlePERFILClick} handleLOGINClick={this.handleLOGINClick} handleNOTISClick={this.handleNOTISClick} handleTIMELINEClick={this.handleTIMELINEClick} />;

        }
        

        return (
            
            <div className="App">

              


                {loginRegistro}



            </div>


      );
  }
}

export default App;
