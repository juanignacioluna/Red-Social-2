var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.post("/", (req, res) => {


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


            const ahBo = await UserPersonal.findOne({arroba: req.body.arroba});  //SELECT


            // res.send(ahBo);
        


            
            var schemaTuit = new mongoose.Schema({

                arroba: String,
                tuit: String,
                mg: Number,
                rt: Number,
                rtSiNo: Boolean,
                rtPOR: String,
                idTuitOriginal: String 


            }, {collection: 'tuits'});



            var random3 = Math.random();


            var Tuit = mongoose.model(''+(random3+1)+'', schemaTuit);



            const ahBo3 = await Tuit.findOne({_id: req.body.id});  //SELECT
            
            res.send([ahBo, ahBo3]);



        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;