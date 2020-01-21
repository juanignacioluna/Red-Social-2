import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import axios from 'axios';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buscar: [] };
        this.handleSubmitBuscar = this.handleSubmitBuscar.bind(this);
    }

    handleCerrarClick(e){



        axios.post('http://localhost:9000/cerrar')
        .then(function (response) {
            

            $("#hidden").trigger("click");


        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })

    }

    handleSubmitBuscar(e){

        const self = this;

        const buscar = {
            buscar: $('.buscar').val()
          };


        axios
            .post('http://localhost:9000/buscar', buscar)
           
            .then(function (response) {
                
    
                // alert(response['data'][0]['nombreReal']);



                if(self.props.buscar){


                    $("#hidden55").trigger("click");



                }else{

                    $("#hidden5").trigger("click");

                }



                
    
    

    
            })


    }

    j(e){

        e.preventDefault();

    }
  
    render() {

        $(document).ready(function() {






        });
        
        return (

            <div class="Topbar">

                    <input onClick={this.props.handleBUSCARClick} id="hidden5" type="hidden"></input>

                    <input onClick={this.props.buscar} id="hidden55" type="hidden"></input>



                    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                            <a className="navbar-item logoTimeline" href="#" >
                            <img src={logo}></img>
                            <input onClick={this.props.handleLOGINClick} id="hidden" type="hidden"></input>
                            </a>

                            <a id="navbar-burger-id" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            </a>
                        </div>

                        <div id="navbar-menu-id" className="navbar-menu">
                            <div className="navbar-start">
                            <a onClick={this.props.handleTIMELINEClick} className="navbar-item">
                                Inicio
                            </a>

                            <a onClick={this.props.handleNOTISClick} className="navbar-item">
                                Notificaciones
                            </a>

                            <a onClick={this.props.handlePERFILClick} className="navbar-item">
                                Perfil
                            </a>

                            <div className="navbar-item">
                            <div className="field">
                                <div className="control">
                                    <button onClick={this.handleCerrarClick} className="button is-danger is-light is-rounded">Cerrar Sesión</button>
                                </div>
                                </div></div>

                            </div>
                            <form onSubmit={this.j} method="post">

                            <div className="navbar-end">

                            <div className="navbar-item">

                                

                                <input className="input buscar" type="text" placeholder="Buscar..."></input>

                                <div className="field">
                                <div className="control">

                                    <button
                                    type="submit" 
                                    // onClick={this.props.handleBUSCARClick}
                                    onClick={this.handleSubmitBuscar}
                                    className="button is-black buscarTimeline">Buscar</button>


                                </div>
                                </div>
                                

                            </div>

                            </div>
                            </form>
                        </div>
                        </nav>


                </div>

            );
    }
  }


export default Topbar;