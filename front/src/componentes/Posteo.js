import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import axios from 'axios';

class Posteo extends React.Component {
    constructor(props) {
        super(props);
        this.mgg = this.props.mg ;
        this.rtt = this.props.rt;
        if(!this.props.mg){
            this.mgg = 0;
        }
        if(!this.props.rt){
            this.rtt = 0;
        }
        this.state = { 
        
            nombreReal: "",
            imagen: "",
            mgClass: "button is-danger",
            mgNumber: this.mgg,
            rtClass: "button is-success",
            rtNumber: this.rtt,
            rt: ""
    
        };

    this.otro = this.otro.bind(this);
    this.mg = this.mg.bind(this);
    this.rt = this.rt.bind(this);

    }

    otro(e){

        var self = this;

        const arroba = {
            arroba: self.props.arroba
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




    rt(e){

        var self = this;


        if(self.state.rtClass=="button is-dark"){

            self.setState({

                rtClass: "button is-dark is-loading"
              
            });

        }else{

            self.setState({

                rtClass: "button is-success is-loading"
              
            });

        }









        const id = {
            id: self.props.id
        };


        axios.post('http://localhost:9000/rt', id)
        .then(function (response) {



                self.setState({

                    rtClass: response['data']

                  });

                axios.post('http://localhost:9000/getMg', id)
                .then(function (response2) {


                    if(response2['data']['rt']){

                        self.setState({

                            rtNumber: response2['data']['rt']
                        
                        });
                        

                    }else{

                        self.setState({

                            rtNumber: 0
                        
                        });
                        
                    }


                    document.getElementById("hidden79").click();


                }) 
                
                

                

            


        })



    }




    mg(e){

        var self = this;


        if(self.state.mgClass=="button is-warning"){

            self.setState({

                mgClass: "button is-warning is-loading"
              
            });

        }else{

            self.setState({

                mgClass: "button is-danger is-loading"
              
            });

        }






        const id = {
            id: self.props.id
        };


        axios.post('http://localhost:9000/mg', id)
        .then(function (response) {



                self.setState({

                    mgClass: response['data']
                  
                  });

                axios.post('http://localhost:9000/getMg', id)
                .then(function (response2) {



                    if(response2['data']['mg']){

                        self.setState({

                            mgNumber: response2['data']['mg']
                        
                        });
                        

                    }else{

                        self.setState({

                            mgNumber: 0
                        
                        });
                        
                    }


                    // document.getElementById("hidden79").click();


                })                  
                

            


        })
        









    }


    componentDidMount() {

        var self = this;

        const arroba = {
            arroba: self.props.arroba,
            id: self.props.id
        };


        let sRT={

            color: "green"

        };



        axios.post('http://localhost:9000/getPosteo', arroba)
        .then(function (response) {


            if(self.props.rtSiNo==1){
                var rt22 = "Retuiteado por " + response['data'][1]['rtPOR'];
                // var rt= <b> Retuiteado por response['data'][1]['rtSiNo']: </b>;
                var rt = <b style={sRT}>{rt22}</b> ;
            }else{
                var rt="";
            }



            console.log(response['data']);


            self.setState({
      
                nombreReal: response['data'][0]['nombreReal'],
                imagen: response['data'][0]['imagen'],
                rt: rt
              
              });




        })
        .catch(function (error) {
            alert(error);
            console.log(error);
        })







        const id = {
            id: self.props.id
        };
        



        axios.post('http://localhost:9000/getMg2', id)
        .then(function (response) {


            self.setState({

                mgClass: response['data'][0],


                rtClass: response['data'][1],

                m1: self.props.rtPOR

            });




        })











        
        
        }
  
    render() {



        $(document).ready(function() {




        });

        
        return (

            <div class="Posteo">

                <input onClick={this.props.otro} id="hidden7" type="hidden"></input>
                <input onClick={this.props.handlePostearr} id="hidden79" type="hidden"></input>
                

                <div class="box">
                    <article class="media">
                        <div class="media-left">
                        <figure class="image is-64x64">
                            <a><img onClick={this.otro} src={this.state.imagen} alt="Image"></img></a>
                        </figure>
                        </div>
                        <div class="media-content">
                        <div class="content">
                            {this.state.rt}
                            <p>
                            <strong>{this.state.nombreReal}</strong> <small>@{this.props.arroba}</small>
                            <br></br>
                            {this.props.tuit}
                            </p>
                        </div>
                        <nav class="level is-mobile">
                            <div class="level-left">

                            <button onClick={this.rt} class={this.state.rtClass}>
                                <span>{this.state.rtNumber}</span>
                                <span class="icon">
                                <i class="fas fa-retweet"></i>
                                </span>
                            </button>

                            <button onClick={this.mg} class={this.state.mgClass}>
                                <span>{this.state.mgNumber}</span>
                                <span class="icon">
                                <i class="fas fa-heart"></i>
                                </span>
                            </button>
                            </div>
                        </nav>
                        </div>
                    </article>
                    </div>

                </div>

            );
    }
  }


export default Posteo;