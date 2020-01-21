var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.get("/", (req, res) => {


    (async () => {



        try{


            var schemaPersonal = new mongoose.Schema({

                nombreReal: String,
                arroba: String,
                password: String,
                biografia: String,
                seguidores: Number,    
                siguiendo: Number, 
                imagen: String


            }, {collection: 'personal'});



            var random = Math.random();


            var UserPersonal = mongoose.model(''+(random+1)+'', schemaPersonal);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const ahBo = await UserPersonal.findOne({arroba: session.arroba});  //SELECT


            res.send(ahBo);

            




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;