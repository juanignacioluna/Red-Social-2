import React from 'react';
import logo from '../fotos/ig5.png';
import '../App.css';
import App from '../App'
import axios from 'axios';
import $ from "jquery";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: "nadie" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

        var self = this;


        axios.get('http://localhost:9000/sess')
        .then(function (response) {
            self.setState({
      
                user: response['data']
              
              });


            // alert(response['data']);
            console.log(response);


            if(response['data'] != ""){


                $("#hidden").trigger("click");


            }



        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })

        
        
        }


    handleSubmit(e){

        const login = {
            arroba: $('.arroba').val(),
            password: $('.password').val(),
          };


        axios
            .post('http://localhost:9000/login', login)
            .then(function (res) {

                

                if(res['data']=="0"){
            
                    console.log("No existe");

                    alert("No existe");
                }else{

                    console.log("LOGUEAR");
                    
                    $("#hidden").trigger("click");

                }


              })

    }

    handleJUGAR(e){


        axios
            .post('http://localhost:9000/jugar');
            

    }

    j(e){

        e.preventDefault();

    }
  
    render() {
        return (
          <div className="Login">




                <div className="columns">
                <div className="column"></div>
                <div className="column">
                <div className="centerBlock">



                    <input onClick={this.props.handleTIMELINEClick} id="hidden" type="hidden"></input>


                    <img src={logo} className="App-logo center-block" alt="logo" />

                    <form onSubmit={this.j} method="post">

                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input arroba" type="text" placeholder="Nombre de Usuario"></input>
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control has-icons-left">
                            <input class="input password" type="password" placeholder="Contraseña"></input>
                            <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        </div>
                        <div class="field">
                        <p class="control">
                        <div className="centerBlock">
                            <button onClick={this.handleSubmit} class="button is-info is-large is-rounded">
                            Ingresar
                            </button>
                        </div>
                        <br/>
                        <div className="centerBlock">
                            <button onClick={this.props.handleREGISTROClick} class="button is-rounded">
                            Registrar
                            </button>
                        </div>
                        <br/>
                        {/* <div className="centerBlock">
                            <button onClick={this.handleJUGAR} class="button is-warning">
                            JUGAR CON MONGO
                            </button>
                        </div> */}
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

export default Login;