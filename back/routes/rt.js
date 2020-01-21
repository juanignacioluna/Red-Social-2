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


            var Tuit = mongoose.model(''+random+'', schemaTuit);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const ahBo1 = await Tuit.findOne({ _id: req.body.id}, null, {sort: {'_id': -1}});  //SELECT

            console.log(ahBo1['arroba']);

            

            if(ahBo1['rtSiNo']==1){


                var schemaRT = new mongoose.Schema({

                    arroba: String,
                    idTuitOriginal: String 
    
    
                }, {collection: 'rt'});
    
    
    
                var randomrt = Math.random();
    
    
                var RT = mongoose.model(''+randomrt+'', schemaRT);

                const ahBo4 = await RT.findOne({arroba: session.arroba, idTuitOriginal: ahBo1['idTuitOriginal']}, null, {sort: {'_id': -1}});  //SELECT

                if(ahBo4){



                    await ahBo4.remove();  //CREAR

                    const ahBo5 = await Tuit.findOne({rtPOR: session.arroba, idTuitOriginal: ahBo1['idTuitOriginal']}, null, {sort: {'_id': -1}});  //SELECT

                    await ahBo5.remove();  //CREAR
                    


                    const r3 = await Tuit.updateMany({ idTuitOriginal: ahBo1['idTuitOriginal'] }, { $inc: { rt: -1 } });


                    const r4 = await Tuit.findOneAndUpdate({ _id: ahBo1['idTuitOriginal'] }, { $inc: { rt: -0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);
    
    
                    });

                    res.send("button is-success");








                }else{


                    const r1 = new RT({


                        arroba: session.arroba,

                        idTuitOriginal: ahBo1['idTuitOriginal']
        
        
        
                    });

                    await r1.save();  //CREAR



                    const r2 = new Tuit({


                        arroba: ahBo1['arroba'],
                        tuit: ahBo1['tuit'],
                        mg: ahBo1['mg'],
                        rt: ahBo1['rt'],
                        rtSiNo: 1,
                        rtPOR: session.arroba,
                        idTuitOriginal: ahBo1['idTuitOriginal']
        
        
        
                    });

                    await r2.save();  //CREAR


                    const r3 = await Tuit.updateMany({ idTuitOriginal: ahBo1['idTuitOriginal'] }, { $inc: { rt: 1 } });


                    const r4 = await Tuit.findOneAndUpdate({ _id: ahBo1['idTuitOriginal'] }, { $inc: { rt: 0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);
    
    
                    });









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
                        
                        likeART: 0,
                        
                        rtAtuit: 0,
                        
                        rtART: 1,
                        
                        idTuit: req.body.id



                    });


                    await NOTI01.save();  //CREAR

                    const NOTI012 = new Noti({


                        receptor: ahBo1['arroba'],

                        emisor: session.arroba,
                        
                        seguidorNuevo: 0,
        
                        likeAtuit: 0,
                        
                        likeART: 0,
                        
                        rtAtuit: 1,
                        
                        rtART: 0,
                        
                        idTuit: req.body.id



                    });


                    await NOTI012.save();  //CREAR












                    res.send("button is-dark");
                    

                }



            }else{

                var schemaRT = new mongoose.Schema({

                    arroba: String,
                    idTuitOriginal: String 
    
    
                }, {collection: 'rt'});
    
    
    
                var randomrt = Math.random();
    
    
                var RT = mongoose.model(''+randomrt+'', schemaRT);

                const ahBo4 = await RT.findOne({arroba: session.arroba, idTuitOriginal: req.body.id}, null, {sort: {'_id': -1}});  //SELECT

                if(ahBo4){



                    await ahBo4.remove();  //CREAR

                    const ahBo5 = await Tuit.findOne({rtPOR: session.arroba, idTuitOriginal: req.body.id}, null, {sort: {'_id': -1}});  //SELECT

                    await ahBo5.remove();  //CREAR
                    


                    const r3 = await Tuit.updateMany({ idTuitOriginal: req.body.id }, { $inc: { rt: -1 } });


                    const r4 = await Tuit.findOneAndUpdate({ _id: req.body.id }, { $inc: { rt: -0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);
    
    
                    });

                    res.send("button is-success");








                }else{


                    const r1 = new RT({


                        arroba: session.arroba,

                        idTuitOriginal: req.body.id
        
        
        
                    });

                    await r1.save();  //CREAR



                    const r2 = new Tuit({


                        arroba: ahBo1['arroba'],
                        tuit: ahBo1['tuit'],
                        mg: ahBo1['mg'],
                        rt: ahBo1['rt'],
                        rtSiNo: 1,
                        rtPOR: session.arroba,
                        idTuitOriginal: req.body.id
        
        
        
                    });

                    await r2.save();  //CREAR


                    const r3 = await Tuit.updateMany({ idTuitOriginal: req.body.id }, { $inc: { rt: 1 } });


                    const r4 = await Tuit.findOneAndUpdate({ _id: req.body.id }, { $inc: { rt: 0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);
    
    
                    });





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

                    

                    const NOTI012 = new Noti({


                        receptor: ahBo1['arroba'],

                        emisor: session.arroba,
                        
                        seguidorNuevo: 0,
        
                        likeAtuit: 0,
                        
                        likeART: 0,
                        
                        rtAtuit: 1,
                        
                        rtART: 0,
                        
                        idTuit: req.body.id



                    });


                    await NOTI012.save();  //CREAR












                    res.send("button is-dark");
                    

                }
            
            
            }

            

                

                


            





        } catch(error){
            console.error(error);
        }



    })();


    


});







            




module.exports = router;