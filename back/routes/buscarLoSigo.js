var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.post("/", (req, res) => {


    (async () => {



        try{

            var schema = new mongoose.Schema({

                esteUsuario: String,

                sigueAa: String


            }, {collection: 'seguidores'});



            var random = Math.random();


            var User = mongoose.model(''+random+'', schema);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const ahBo = await User.findOne({esteUsuario: session.arroba, sigueAa: req.body.arroba}, null, {sort: {'_id': -1}});  //SELECT

            if(ahBo){

                var a = ["button is-warning is-rounded seguir", "SIGUIENDO"];

                res.send(a);

            }else{

                var a = ["button is-link is-rounded seguir", "SEGUIR"];

                res.send(a);


            }




        } catch(error){
            console.error(error);
        }



    })();


    


});







            




module.exports = router;