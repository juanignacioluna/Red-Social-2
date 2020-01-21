var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.post("/", (req, res) => {


    (async () => {



        try{

            var schemaTuit = new mongoose.Schema({

                arroba: String,
                tuit: String,
                mg: Number,
                rt: Number


            }, {collection: 'tuits'});



            var random = Math.random();


            var Tuit = mongoose.model(''+random+'', schemaTuit);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const ahBo = await Tuit.findOne({_id: req.body.id}, null, {sort: {'_id': -1}});  //SELECT



            res.send(ahBo);





        } catch(error){
            console.error(error);
        }



    })();


    


});







            




module.exports = router;