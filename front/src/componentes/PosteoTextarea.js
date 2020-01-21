import React from 'react';
import logo from '../fotos/ig6.png';
import '../App.css';
import $ from "jquery";
import axios from 'axios';

class PosteoTextarea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { aopota: "" };
    }

    handlePostear(e){

        const tuit = {
            tuit: $('textarea').val()
          };


        axios
            .post('http://localhost:9000/postear', tuit)
            .then(function (res) {

                
                    
                $("#hidden4").trigger("click");



              })

    }
  
    render() {

        $(document).ready(function() {



        });

        let textAreaPosteo={

            resize: 'none'

        };
        
        return (

            <div class="PosteoTextarea">

                <input 
                onClick={this.props.handlePostearr}
                 id="hidden4" type="hidden"></input>

                <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    ¿Qué está pasando?
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                    <div class="field">
                    <div class="control">
                        <textarea style={textAreaPosteo} maxlength="140" rows="4" class="textarea is-info" placeholder="¿Qué está pasando?"></textarea>
                    </div>
                    </div>
                    </div>
                </div>
                <footer class="card-footer">
                    <a onClick={this.handlePostear} class="card-footer-item">Postear</a>
                </footer>
                </div>


            </div>

            );
    }
  }


export default PosteoTextarea;