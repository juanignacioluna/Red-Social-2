var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.post("/", (req, res) => {


    (async () => {



        try{

            var schemaTuit = new mongoose.Schema({

                arroba: String,
                tuit: String


            }, {collection: 'tuits'});



            var random = Math.random();


            var Tuit = mongoose.model(''+random+'', schemaTuit);


            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });




                const tuit1 = new Tuit({


                    arroba: session.arroba,
                    tuit: req.body.tuit
    
    
    
                });

                await tuit1.save();  //CREAR

                res.send("1");

            




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;