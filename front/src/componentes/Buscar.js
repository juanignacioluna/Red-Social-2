import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import UserBuscar from '../componentes/UserBuscar';
import Posteo from '../componentes/Posteo';
import Topbar from '../componentes/Topbar';
import PosteoTextarea from '../componentes/PosteoTextarea';
import axios from 'axios';

class Buscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buscar: [] };


        this.to = this.to.bind(this);
    }

    componentWillMount(){

        const self = this;



        axios
        .get('http://localhost:9000/getBuscar')
       
        .then(function (response) {


            // alert(response['data'][0]['nombreReal']);
            

            self.setState({
          
                buscar: response['data']
              
              });




        })


        
        
        }

    to(e){
        const self = this;



        axios
        .get('http://localhost:9000/getBuscar')
       
        .then(function (response) {


            // alert(response['data'][0]['nombreReal']);
            

            self.setState({
          
                buscar: response['data']
              
              });




        })
    }

  
    render() {

        let sNotis={

            color: 'white'

        };



        $(document).ready(function() {




        });
        



        return (
          <div className="Buscar">
  
                

                <Topbar 
                buscar={this.to}
                handleBUSCARClick={this.props.handleBUSCARClick}
                handleLOGINClick={this.props.handleLOGINClick}
                handleNOTISClick={this.props.handleNOTISClick} 
                handlePERFILClick={this.props.handlePERFILClick} 
                handleTIMELINEClick={this.props.handleTIMELINEClick} 

                />

                <div class="columns">

                <div class="column"></div>

                <div class="column">


                        <h1 style={sNotis} class="title is-1 titlePerfil">LISTA DE RESULTADOS</h1>


                        {this.state.buscar.map(b => <UserBuscar 
                        nombre={b.nombreReal}
                        arroba={b.arroba}
                        imagen={b.imagen}
                        otro={this.props.handleOTROPERFIL} />)}




                </div>

                <div class="column">


                </div>


                </div>
                



  
  
            </div>
        );
    }
  }

export default Buscar;



