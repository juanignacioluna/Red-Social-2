var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.get("/", (req, res) => {


    (async () => {



        try{


            var schemaTuit = new mongoose.Schema({

                arroba: String,
                tuit: String,
                mg: Number,
                rt: Number,
                rtSiNo: Boolean,
                rtPOR: String,
                idTuitOriginal: String 


            }, {collection: 'tuits'});



            var random = Math.random();


            var Tuit = mongoose.model(''+random+'', schemaTuit);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });

            var schemaSe = new mongoose.Schema({

                esteUsuario : String,
                sigueAa : String


            }, {collection: 'seguidores'});



            var random2 = Math.random();


            var User2 = mongoose.model(''+random2+'', schemaSe);

            const ahBo2 = await User2.find({esteUsuario:session.arroba}, 'sigueAa');  //SELECT




            if(ahBo2){

            


                    var i;

                    var aux = [];


                    for (i = 0; i < ahBo2.length; i++) {


                        aux.push(ahBo2[i].sigueAa);

                    }




                    const ahBo = await Tuit.find({$or: [{arroba: session.arroba, rtPOR: null}, {arroba: { $in: aux }, rtPOR: null}, {rtPOR: session.arroba}, {rtPOR: { $in: aux }}      ]}, null, {sort: {'_id': -1}} )
                    .exec(function (err, docs) {

                            console.log(docs);

                            res.send(docs);

                    });

            }else{

                const ahBo = await Tuit.find({$or: [{arroba: session.arroba, rtPOR: null}, {rtPOR: session.arroba}      ]}, null, {sort: {'_id': -1}} )
                .exec(function (err, docs) {

                        console.log(docs);

                        res.send(docs);

                });

            }

            




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;