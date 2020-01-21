import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import Topbar from '../componentes/Topbar';
import NotiPosteo from '../componentes/NotiPosteo';
import axios from 'axios';

class Notis extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 


            notis: []
        
        };
    }

    componentWillMount(){


        var self = this;





        axios.get('http://localhost:9000/getNotis')
        .then(function (response) {


            self.setState({
      
                notis: response['data']
              
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

            <div class="Notis">



                <Topbar 
                handleBUSCARClick={this.props.handleBUSCARClick}
                handleLOGINClick={this.props.handleLOGINClick}
                handleNOTISClick={this.props.handleNOTISClick} 
                handlePERFILClick={this.props.handlePERFILClick} 
                handleTIMELINEClick={this.props.handleTIMELINEClick} 
                />

                <div class="columns">

                <div class="column"></div>

                <div class="column">

                <h1 style={sNotis} class="title is-1 titlePerfil">NOTIFICACIONES</h1>



                    {this.state.notis.map(noti => <NotiPosteo 

                    key={noti} 
                    id={noti._id}
                    emisor={noti.emisor}
                    receptor={noti.receptor}
                    seguidorNuevo= {noti.seguidorNuevo}
                    likeAtuit= {noti.likeAtuit}
                    likeART= {noti.likeART}
                    rtAtuit= {noti.rtAtuit}
                    rtART= {noti.rtART}
                    idTuit= {noti.idTuit} />)}





                </div>

                <div class="column"></div>

                </div>



            </div>

            );
    }
  }


export default Notis;