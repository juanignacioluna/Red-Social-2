import React from 'react';
import '../App.css';
import $ from "jquery";
import Posteo from '../componentes/Posteo';
import Topbar from '../componentes/Topbar';
import axios from 'axios';

class OtroPerfil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            nombreReal: "",
            arroba: "",
            password: "",
            biografia: "",
            seguidores: "",    
            siguiendo: "", 
            imagen: "",
            tuits: [],
            cantidadTuits: 0,

            class: "button is-primary is-rounded is-large is-fullwidth seguir",
            val: "SEGUIR"
        
        
        };

        this.seguir = this.seguir.bind(this);
        this.nada = this.nada.bind(this);

    }

    seguir(e){

        var self = this;


        if(self.state.class=="button is-primary is-rounded is-large is-fullwidth seguir"){

            self.setState({
        
                class: "button is-primary is-rounded is-large is-fullwidth seguir is-loading"
            
            });

        }else{

            self.setState({
        
                class: "button is-warning is-rounded is-large is-fullwidth seguir is-loading"
            
            });

        }





        

        const seguir = {
            val: this.state.val
        };

        axios
        .post('http://localhost:9000/seguir', seguir)
        .then(function (res) {



            axios.get('http://localhost:9000/otroPersonal')
            .then(function (response) {
                self.setState({
          
                    nombreReal: response['data']['nombreReal'],
                    arroba: response['data']['arroba'],
                    password: response['data']['password'],
                    biografia: response['data']['biografia'],
                    seguidores: response['data']['seguidores'],    
                    siguiendo: response['data']['siguiendo'], 
                    imagen: response['data']['imagen']
                  
                  });
                
                });

                

            axios.get('http://localhost:9000/otroLoSigo')
            .then(function (response) {




                self.setState({
        
                    class: response['data'][0],
                    val: response['data'][1]
                
                });





            })                


            


          })

    }

    nada(){

    }

    componentWillMount() {

        var self = this;


        axios.get('http://localhost:9000/otroPersonal')
        .then(function (response) {
            self.setState({
      
                nombreReal: response['data']['nombreReal'],
                arroba: response['data']['arroba'],
                password: response['data']['password'],
                biografia: response['data']['biografia'],
                seguidores: response['data']['seguidores'],    
                siguiendo: response['data']['siguiendo'], 
                imagen: response['data']['imagen']
              
              });


            console.log(response['data']['biografia']);




        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })





        axios.get('http://localhost:9000/otroGetTuits')
        .then(function (response) {





            self.setState({
      
                tuits: response['data'],
                cantidadTuits: response['data']['length']
              
              });




        })
        




        axios.get('http://localhost:9000/otroLoSigo')
        .then(function (response) {




            self.setState({
      
                class: response['data'][0],
                val: response['data'][1]
              
              });





        })


        
        }



    render() {

        $(document).ready(function() {





        });
        
        return (

            <div class="OtroPerfil">

                <Topbar
                handleBUSCARClick={this.props.handleBUSCARClick}
                handleLOGINClick={this.props.handleLOGINClick}
                handleNOTISClick={this.props.handleNOTISClick} 
                handlePERFILClick={this.props.handlePERFILClick} 
                handleTIMELINEClick={this.props.handleTIMELINEClick} 
                 />


                <div class="columns">

                <div class="column"></div>

                <div class="column columnPerfil">

                <div className="centerBlock">   
                    <figure class="image is-128x128 figurePerfil">
                        <img src={this.state.imagen}></img>
                    </figure>
                </div> 

                <br></br>
                <br></br>



                <h1 class="title is-3 titlePerfil">{this.state.nombreReal}</h1>

                <h1 class="subtitle is-4 titlePerfil">@{this.state.arroba}</h1>

                <h1 class="subtitle is-6 titlePerfil">{this.state.biografia}</h1>

                <h1 class="subtitle is-6 titlePerfil">{this.state.seguidores} seguidores</h1>

                <h1 class="subtitle is-6 titlePerfil">{this.state.siguiendo} siguiendo</h1>

                <button onClick={this.seguir} class={this.state.class}>{this.state.val}</button>

                <br></br>

                

                {this.state.tuits.map(tuit => <Posteo
                key={tuit} 
                handlePostearr={this.nada}
                arroba={tuit.arroba}
                id={tuit._id}
                tuit={tuit.tuit}
                mg= {tuit.mg}
                rt= {tuit.rt}
                rtSiNo= {tuit.rtSiNo}
                rtPOR= {tuit.rtPOR}
                otro={this.props.handleOTROPERFIL}/>)}


                </div>

                <div class="column"></div>


                </div>





            </div>

            );
    }
  }


export default OtroPerfil;