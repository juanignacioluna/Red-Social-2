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
                rt: Number,
                rtSiNo: Boolean,
                rtPOR: String,
                idTuitOriginal: String 


            }, {collection: 'tuits'});


            var random = Math.random();


            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });




            var Tuit = mongoose.model(''+(random+1)+'', schemaTuit);



            const ahBo1 = await Tuit.findOne({ _id: req.body.id}, null, {sort: {'_id': -1}});  //SELECT



            if(ahBo1['rtSiNo']==1){


                    var idO = ahBo1['idTuitOriginal'];



                    var schemaMg = new mongoose.Schema({

                        arroba: String,
                        idTuit: String

                    }, {collection: 'mg'});


                    var Mg = mongoose.model(''+(random+2)+'', schemaMg);

                    


                    const ahBo2 = await Mg.findOne({arroba: session.arroba, idTuit: idO}, null, {sort: {'_id': -1}});  //SELECT



                    if(ahBo2){
                        // res.send("button is-warning");
                        var z = "button is-warning";
                    }else{
                        // res.send("button is-danger");
                        var z = "button is-danger";

                    }



                    var schemaRT = new mongoose.Schema({

                        arroba: String,
                        idTuitOriginal: String 


                    }, {collection: 'rt'});



                    var RT = mongoose.model(''+(random+3)+'', schemaRT);



                    const ahBo3 = await RT.findOne({arroba: session.arroba, idTuitOriginal: idO}, null, {sort: {'_id': -1}});  //SELECT



                    if(ahBo3){
                        // res.send("button is-warning");
                        var y = "button is-dark";
                    }else{
                        // res.send("button is-danger");
                        var y = "button is-success";

                    }










            }else{

                    var schemaMg = new mongoose.Schema({

                        arroba: String,
                        idTuit: String

                    }, {collection: 'mg'});


                    var Mg = mongoose.model(''+(random+2)+'', schemaMg);



                    const ahBo2 = await Mg.findOne({arroba: session.arroba, idTuit: req.body.id}, null, {sort: {'_id': -1}});  //SELECT



                    if(ahBo2){
                        // res.send("button is-warning");
                        var z = "button is-warning";
                    }else{
                        // res.send("button is-danger");
                        var z = "button is-danger";

                    }



                    var schemaRT = new mongoose.Schema({

                        arroba: String,
                        idTuitOriginal: String 


                    }, {collection: 'rt'});



                    var RT = mongoose.model(''+(random+3)+'', schemaRT);



                    const ahBo3 = await RT.findOne({arroba: session.arroba, idTuitOriginal: req.body.id}, null, {sort: {'_id': -1}});  //SELECT



                    if(ahBo3){
                        // res.send("button is-warning");
                        var y = "button is-dark";
                    }else{
                        // res.send("button is-danger");
                        var y = "button is-success";

                    }






            }


            res.send([z,y]);










        } catch(error){
            console.error(error);
        }



    })();


    


});







            




module.exports = router;