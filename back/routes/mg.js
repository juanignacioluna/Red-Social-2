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

                var schemaMg = new mongoose.Schema({

                    arroba: String,
                    idTuit: String

                }, {collection: 'mg'});



                var random2 = Math.random();


                var Mg = mongoose.model(''+random2+'', schemaMg);



                const ahBo2 = await Mg.findOne({arroba: session.arroba, idTuit: ahBo1['idTuitOriginal']}, null, {sort: {'_id': -1}});  //SELECT

                if(ahBo2){

                    await ahBo2.remove();  //CREAR

                    const ahBo3 = await Tuit.findOneAndUpdate({ _id: ahBo1['idTuitOriginal'] }, { $inc: { mg: -0.5 } }, {new: true },function(err, response) {
                    

                        console.log(response);


                    });

                    const ahBo4 = await Tuit.updateMany({ idTuitOriginal: ahBo1['idTuitOriginal'] }, { $inc: { mg: -1 } });

                    res.send("button is-danger");

                }else{

                    const mg1 = new Mg({


                        arroba: session.arroba,
        
                        idTuit: ahBo1['idTuitOriginal']
        
                    });
        
        
                    await mg1.save();  //CREAR

                    const ahBo3 = await Tuit.findOneAndUpdate({ _id: ahBo1['idTuitOriginal'] }, { $inc: { mg: 0.5 } }, {new: true },function(err, response) {
                    

                        console.log(response);


                    });

                    const ahBo4 = await Tuit.updateMany({ idTuitOriginal: ahBo1['idTuitOriginal'] }, { $inc: { mg: 1 } });






                    var schemaNotis = new mongoose.Schema({

                        receptor: String,

                        emisor: String,
                        
                        seguidorNuevo: Boolean,
        
                        likeAtuit: Boolean,
                        
                        likeART: Boolean,
                        
                        rtAtuit: Boolean,
                        
                        rtART: Boolean,
                        
                        idTuit: String


                    }, {collection: 'notis'});



                    var randomNotis = Math.random();


                    var Noti = mongoose.model(''+randomNotis+'', schemaNotis);

                    


                    const NOTI01 = new Noti({


                        receptor: ahBo1['rtPOR'],

                        emisor: session.arroba,
                        
                        seguidorNuevo: 0,
        
                        likeAtuit: 0,
                        
                        likeART: 1,
                        
                        rtAtuit: 0,
                        
                        rtART: 0,
                        
                        idTuit: req.body.id



                    });


                    await NOTI01.save();  //CREAR

                    const NOTI012 = new Noti({


                        receptor: ahBo1['arroba'],

                        emisor: session.arroba,
                        
                        seguidorNuevo: 0,
        
                        likeAtuit: 1,
                        
                        likeART: 0,
                        
                        rtAtuit: 0,
                        
                        rtART: 0,
                        
                        idTuit: req.body.id



                    });


                    await NOTI012.save();  //CREAR









                    res.send("button is-warning");

                }


            }else{

                    var schemaMg = new mongoose.Schema({

                        arroba: String,
                        idTuit: String

                    }, {collection: 'mg'});



                    var random2 = Math.random();


                    var Mg = mongoose.model(''+random2+'', schemaMg);



                    const ahBo2 = await Mg.findOne({arroba: session.arroba, idTuit: req.body.id}, null, {sort: {'_id': -1}});  //SELECT


                    if(ahBo2){

            
                        await ahBo2.remove();  //CREAR

                        const ahBo3 = await Tuit.findOneAndUpdate({ _id: req.body.id }, { $inc: { mg: -0.5 } }, {new: true },function(err, response) {
                        

                            console.log(response);


                        });

                        const ahBo4 = await Tuit.updateMany({ idTuitOriginal: req.body.id }, { $inc: { mg: -1 } });

                        res.send("button is-danger");

                    }else{

                        const mg1 = new Mg({


                            arroba: session.arroba,
            
                            idTuit: req.body.id
            
                        });
            
            
                        await mg1.save();  //CREAR

                        const ahBo3 = await Tuit.findOneAndUpdate({ _id: req.body.id }, { $inc: { mg: 0.5 } }, {new: true },function(err, response) {
                        

                            console.log(response);


                        });

                        const ahBo4 = await Tuit.updateMany({ idTuitOriginal: req.body.id }, { $inc: { mg: 1 } });








                        var schemaNotis = new mongoose.Schema({

                            receptor: String,
    
                            emisor: String,
                            
                            seguidorNuevo: Boolean,
            
                            likeAtuit: Boolean,
                            
                            likeART: Boolean,
                            
                            rtAtuit: Boolean,
                            
                            rtART: Boolean,
                            
                            idTuit: String
    
    
                        }, {collection: 'notis'});
    
    
    
                        var randomNotis = Math.random();
    
    
                        var Noti = mongoose.model(''+randomNotis+'', schemaNotis);
    
                        
    
    
                        const NOTI01 = new Noti({
    
    
                            receptor: ahBo1['arroba'],
    
                            emisor: session.arroba,
                            
                            seguidorNuevo: 0,
            
                            likeAtuit: 1,
                            
                            likeART: 0,
                            
                            rtAtuit: 0,
                            
                            rtART: 0,
                            
                            idTuit: req.body.id
    
    
    
                        });
    
    
                        await NOTI01.save();  //CREAR











                        res.send("button is-warning");

            

                    }

            }





        } catch(error){
            console.error(error);
        }



    })();


    


});







            




module.exports = router;