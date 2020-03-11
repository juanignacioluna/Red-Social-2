import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import Posteo from '../componentes/Posteo';
import Topbar from '../componentes/Topbar';
import PosteoTextarea from '../componentes/PosteoTextarea';
import axios from 'axios';

class Perfil extends React.Component {
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
            cantidadTuits: 0
        
        
        };

    this.handlePOSTEARClick = this.handlePOSTEARClick.bind(this);
    this.handlePOSTEARClick2 = this.handlePOSTEARClick2.bind(this);

    }

    componentWillMount() {

        var self = this;


        axios.get('http://localhost:9000/perfilPersonal')
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
        


        var self=this;


        axios.get('http://localhost:9000/getTuitsTimeline2')
        .then(function (response) {

            self.setState({
      
                tuits: []
              
            });



            self.setState({
      
                tuits: response['data'],
                cantidadTuits: response['data']['length']
              
              });


              $('textarea').val("");




        })
        

        
        
        }

        handlePOSTEARClick(){

            var self=this;




            axios.get('http://localhost:9000/getTuits')
            .then(function (response) {
    
    
    
                console.log(response['data']);
    
                console.log(response['data'][0]);
    
                console.log(response['data']['length']);
    
    
    
    
                self.setState({
          
                    tuits: response['data'],
                    cantidadTuits: response['data']['length']
                  
                  });

                $('textarea').val("");
    
    
    
    
            })
            .catch(function (error) {
                alert(error);
                console.log(error);
            })

        }



        handlePOSTEARClick2(){

            var self=this;


            axios.get('http://localhost:9000/getTuitsTimeline2')
            .then(function (response) {

                self.setState({
          
                    tuits: []
                  
                });
    
    
    
                self.setState({
          
                    tuits: response['data'],
                    cantidadTuits: response['data']['length']
                  
                  });


                  $('textarea').val("");
    
    
    
    
            })

            

        }




  
    render() {

        $(document).ready(function() {






        });

        
        return (

            <div class="Perfil">


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


                <PosteoTextarea handlePostearr={this.handlePOSTEARClick2} />

            

                {this.state.tuits.map(tuit => <Posteo 
                key={tuit} 
                handlePostearr={this.handlePOSTEARClick2}
                arroba={tuit.arroba}
                id={tuit._id}
                tuit={tuit.tuit}
                mg= {tuit.mg}
                rt= {tuit.rt}
                rtSiNo= {tuit.rtSiNo}
                rtPOR= {tuit.rtPOR}
                otro={this.props.handleOTROPERFIL} />)}


                </div>

                <div class="column"></div>


                </div>





            </div>

            );
    }
  }


export default Perfil;
