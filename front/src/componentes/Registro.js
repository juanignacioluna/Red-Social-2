import React from 'react';
import logo from '../fotos/ig5.png';
import '../App.css';
import $ from "jquery";
import axios from 'axios';

class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = { aopota: "" };
    }

    handleSubmit(e){

        const registro = {
            nombreReal: $('.nombreReal').val(),
            arroba: $('.arroba').val(),
            password: $('.password').val(),
          };


        axios
            .post('http://localhost:9000/registro', registro)
            .then(function (res) {

                if(res['data']=="1"){

                    console.log("usuario creado");
                    
                    $("#hidden").trigger("click");

                }

                if(res['data']=="0"){
            
                    console.log("Usuario con ese arroba ya existente.");

                    alert("Usuario con ese arroba ya existente.");
                }


              })

    }

    j(e){

        e.preventDefault();

    }


  
    render() {
        return (
          <div className="Registro">

                <div className="columns">
                <div className="column"></div>
                <div className="column">
                <div className="centerBlock">

                    <input onClick={this.props.handleTIMELINEClick} id="hidden" type="hidden"></input>

                    <img src={logo} className="App-logo center-block" alt="logo" />

                <form onSubmit={this.j} method="post">

                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input name="nombreReal" class="input nombreReal" type="text" placeholder="Nombre Completo"></input>
                            <span class="icon is-small is-left">
                            <i class="fas fa-user-circle"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input name="arroba" class="input arroba" type="text" placeholder="Nombre de Usuario"></input>
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control has-icons-left">
                            <input name="password" class="input password" type="password" placeholder="Contraseña"></input>
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control">
                        <div className="centerBlock">
                            <button onClick={this.handleSubmit} type="submit" class="button is-info is-large is-rounded">
                            Registrar
                            </button> 
                        </div>
                        <br/>
                        <div className="centerBlock">
                            <button onClick={this.props.handleLOGINClick} class="button is-rounded">
                            Ingresar
                            </button>
                        </div>
                        </p>
                        </div>
                        </form>

                    </div>
                </div>
                <div className="column"></div>

                </div>
  
            </div>
        );
    }
  }

export default Registro;