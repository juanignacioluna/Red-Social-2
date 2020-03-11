var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

router.post("/", (req, res) => {



    (async () => {



        try{

            var schema = new mongoose.Schema({

                nombreReal: String,
                arroba: String,
                password: String


            }, {collection: 'users'});



            var random = Math.random();


            var User = mongoose.model(''+random+'', schema);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const ahBo = await User.findOne({arroba: req.body.arroba, password: req.body.password });  //SELECT


            if(ahBo){

                req.session.arroba = req.body.arroba;
                
                console.log("LOGUEAR A " + req.session.arroba);

                res.send("1");


            }else{

                console.log("No existe");

                res.send("0");

            }




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;
