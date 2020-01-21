import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import axios from 'axios';

class NotiPosteo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        
            class: "",
            accion: "",
            resto: ""
    
        };


    }




    componentDidMount() {

        var self = this;


        var classs = "";
        var accionn = "";

        if(self.props.seguidorNuevo==1){
            classs= "notification is-info";

            accionn=" te ha seguido!!";

            self.setState({
      
                resto: ""
              
            });

        }

        if(self.props.likeAtuit==1){
            classs= "notification is-danger";

            accionn=" ha likeado tu tuit: ";


            const idTuit = {
                id: self.props.idTuit
              };
    
    
            axios
                .post('http://localhost:9000/getNotiTuit', idTuit)
                .then(function (res) {
    
                    
    
                    self.setState({
      
                        resto: res['data']['tuit']
                      
                    });


    
                  })


        }

        if(self.props.likeART==1){
            classs= "notification is-danger";

            accionn=" ha likeado tu Retuit: ";

            const idTuit = {
                id: self.props.idTuit
              };
    
    
            axios
                .post('http://localhost:9000/getNotiTuit', idTuit)
                .then(function (res) {
    
                    
    
                    self.setState({
      
                        resto: "@" +  res['data']['arroba'] + ": " + res['data']['tuit']
                      
                    });


    
                  })
        }

        if(self.props.rtAtuit==1){
            classs= "notification is-success";

            accionn=" ha retuiteado tu tuit: ";


            const idTuit = {
                id: self.props.idTuit
              };
    
    
            axios
                .post('http://localhost:9000/getNotiTuit', idTuit)
                .then(function (res) {
    
                    
    
                    self.setState({
      
                        resto: res['data']['tuit']
                      
                    });

                    
    
                  })
        }

        if(self.props.rtART==1){
            classs= "notification is-success";

            accionn=" ha retuiteado tu Retuit: ";

            const idTuit = {
                id: self.props.idTuit
              };
    
    
            axios
                .post('http://localhost:9000/getNotiTuit', idTuit)
                .then(function (res) {
    
                    
    
                    self.setState({
      
                        resto: "@" +  res['data']['arroba'] + ": " + res['data']['tuit']
                      
                    });


    
                  })
        }


        self.setState({
      
                class: classs,
                accion: accionn
              
        });


        
        
        }
  
    render() {



        $(document).ready(function() {




        });

        
        return (

            <div class="NotiPosteo">

                <div class={this.state.class}>
                    <strong>@{this.props.emisor} {this.state.accion} </strong>
                    <br></br><br></br> 

                    {this.state.resto}


                </div>


                </div>

            );
    }
  }


export default NotiPosteo;