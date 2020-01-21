import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import axios from 'axios';

class UserBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            val: "",
            class: ""
        
        
        };
        this.otro = this.otro.bind(this);
        this.seguir = this.seguir.bind(this);
    }

    otro(e){

        const arroba = {
            arroba: this.props.arroba
          };

        axios.post('http://localhost:9000/otro', arroba)
        .then(function (response) {
            

            $("#hidden7").trigger("click");


        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })

    }
  
    seguir(e){

        var self= this;


        if(self.state.class=="button is-warning is-rounded seguir"){

            self.setState({
    
                class: "button is-warning is-rounded seguir is-loading"
            
            });

        }

        if(self.state.class=="button is-link is-rounded seguir"){

            self.setState({
    
                class: "button is-link is-rounded seguir is-loading"
            
            });

        }



        const arroba = {
            arroba: this.props.arroba,
            val: this.state.val
          };

        axios.post('http://localhost:9000/buscarSeguir', arroba)
        .then(function (response) {
            

            if(response['data']=="1"){

                self.setState({
    
                    class: "button is-warning is-rounded seguir",
                    val: "SIGUIENDO"
                
                });

            }
            
            if(response['data']=="2"){

                self.setState({
    
                    class: "button is-link is-rounded seguir",
                    val: "SEGUIR"
                
                });

            }


        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })

    }

    componentWillMount() {

        var self = this;


        const arroba = {
            arroba: this.props.arroba
          };


        axios.post('http://localhost:9000/buscarLoSigo', arroba)
        .then(function (response) {




            self.setState({
    
                class: response['data'][0],
                val: response['data'][1]
            
            });





        })

    }

    render() {

        
        return (

            <div class="UserBuscar">

                <input onClick={this.props.otro} id="hidden7" type="hidden"></input>

                <div class="box">
                    <article class="media">
                        <div class="media-left">
                        <figure class="image is-64x64">
                            <a><img onClick={this.otro} src={this.props.imagen} alt="Image"></img></a>
                        </figure>
                        </div>
                        <div class="media-content">
                        <div class="content">
                            <p>
                            <strong>{this.props.nombre}</strong> <small>@{this.props.arroba}</small>
                            </p>
                        <button onClick={this.seguir} class={this.state.class}>{this.state.val}</button>
                        </div>
                        </div>
                    </article>
                    </div>

                </div>

            );
    }
  }


export default UserBuscar;