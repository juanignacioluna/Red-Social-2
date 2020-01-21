var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');


router.post("/", (req, res) => {


    (async () => {



        try{

            var schema = new mongoose.Schema({

                nombreReal: String,
                arroba: String,
                password: String,
                biografia: String,
                seguidores: Number,    
                siguiendo: Number, 
                imagen: String


            }, {collection: 'personal'});


            var random = Math.random();


            var User = mongoose.model(''+random+'', schema);

            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            


            const ahBo23 = await User.find().or([ { "nombreReal": new RegExp(req.body.buscar, "i") }, { "arroba": new RegExp(req.body.buscar, "i") }]).exec(function(err, mycol) {
                console.log(mycol);

                session.buscar = mycol;

                res.send(mycol);
            });





        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;