import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import Posteo from '../componentes/Posteo';
import Topbar from '../componentes/Topbar';
import PosteoTextarea from '../componentes/PosteoTextarea';
import axios from 'axios';

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            tuits: [],
            cantidadTuits: 0 
        
        };

        this.handlePOSTEARClick = this.handlePOSTEARClick.bind(this);
        this.handlePOSTEARClick2 = this.handlePOSTEARClick2.bind(this);
    }

    componentDidMount() {

        var self = this;


        axios.get('http://localhost:9000/sess')
        .then(function (response) {
            self.setState({
      
                user: response['data']
              
              });
            // alert(response['data']);
            console.log(response);
        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })








        axios.get('http://localhost:9000/getTuitsTimeline')
        .then(function (response) {



            self.setState({
      
                tuits: response['data'],
                cantidadTuits: response['data']['length']
              
              });




        })
        
        

        
        
        }

        handlePOSTEARClick(){

            var self=this;




            axios.get('http://localhost:9000/getTuits')
            .then(function (response) {
    
    
    
    
                self.setState({
          
                    tuits: response['data'],
                    cantidadTuits: response['data']['length']
                  
                  });

                $('textarea').val("");
    
    
    
    
            })
            

        }

        handlePOSTEARClick2(){

            var self=this;


            axios.get('http://localhost:9000/getTuitsTimeline')
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

        var post = this.state.tuits.map(tuit =>


            <Posteo
            key={tuit} 
            handlePostearr={this.handlePOSTEARClick2}
            arroba={tuit.arroba}
            id={tuit._id}
            tuit={tuit.tuit}
            mg= {tuit.mg}
            rt= {tuit.rt}
            rtSiNo= {tuit.rtSiNo}
            rtPOR= {tuit.rtPOR}
            otro={this.props.handleOTROPERFIL} />
        
        
        
        );
        



        return (
          <div className="Timeline">
  
                

                <Topbar 
                handleBUSCARClick={this.props.handleBUSCARClick}
                handleLOGINClick={this.props.handleLOGINClick}
                handleNOTISClick={this.props.handleNOTISClick} 
                handlePERFILClick={this.props.handlePERFILClick} 
                handleTIMELINEClick={this.props.handleTIMELINEClick} 

                />

                <div class="columns">

                <div class="column"><h2>Bienvenido {this.state.user}</h2><p id="ide" ></p></div>

                <div class="column">

                    
                
                        <PosteoTextarea handlePostearr={this.handlePOSTEARClick2} />


                        {post}



                </div>

                <div class="column">


                </div>


                </div>
                



  
  
            </div>
        );
    }
  }

export default Timeline;



