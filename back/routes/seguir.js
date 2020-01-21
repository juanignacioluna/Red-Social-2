var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.post("/", (req, res) => {



    (async () => {



        try{


                if(req.body.val=="SEGUIR"){


                    var schema = new mongoose.Schema({

                        esteUsuario: String,

                        sigueAa: String


                    }, {collection: 'seguidores'});



                    var random = Math.random();


                    var User = mongoose.model(''+random+'', schema);

                    
                    
                    await mongoose.connect("mongodb://localhost:27017", {
                        dbName: 'socialnet02',
                        useNewUrlParser: true
                    });


                    const user1 = new User({


                        esteUsuario: session.arroba,

                        sigueAa: session.otro



                    });


                    await user1.save();  //CREAR






                    var schema2 = new mongoose.Schema({

                        nombreReal: String,
                        arroba: String,
                        password: String,
                        biografia: String,
                        seguidores: Number,    
                        siguiendo: Number, 
                        imagen: String


                    }, {collection: 'personal'});



                    var random2 = Math.random();


                    var User2 = mongoose.model(''+random2+'', schema2);





                    const ahBo = await User2.findOneAndUpdate({ arroba: session.arroba }, { $inc: { siguiendo: 0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);


                    });



                    const ahBo2 = await User2.findOneAndUpdate({ arroba: session.otro }, { $inc: { seguidores: 0.5 } }, {new: true },function(err, response) {
                        

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


                        receptor: session.otro,

                        emisor: session.arroba,
                        
                        seguidorNuevo: 1,
        
                        likeAtuit: 0,
                        
                        likeART: 0,
                        
                        rtAtuit: 0,
                        
                        rtART: 0,
                        
                        idTuit: ""



                    });


                    await NOTI01.save();  //CREAR











                    res.send("1");



                }


                
                if(req.body.val=="SIGUIENDO"){


                    var schema = new mongoose.Schema({

                        esteUsuario: String,

                        sigueAa: String


                    }, {collection: 'seguidores'});



                    var random = Math.random();


                    var User = mongoose.model(''+random+'', schema);

                    
                    
                    await mongoose.connect("mongodb://localhost:27017", {
                        dbName: 'socialnet02',
                        useNewUrlParser: true
                    });

                    const ahBo2 = await User.findOne({esteUsuario: session.arroba, sigueAa: session.otro});  //SELECT

                    await ahBo2.remove();



                    var schema2 = new mongoose.Schema({

                        nombreReal: String,
                        arroba: String,
                        password: String,
                        biografia: String,
                        seguidores: Number,    
                        siguiendo: Number, 
                        imagen: String


                    }, {collection: 'personal'});



                    var random2 = Math.random();


                    var User2 = mongoose.model(''+random2+'', schema2);





                    const ahBo = await User2.findOneAndUpdate({ arroba: session.arroba }, { $inc: { siguiendo: -0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);


                    });



                    const ahBo3 = await User2.findOneAndUpdate({ arroba: session.otro }, { $inc: { seguidores: -0.5 } }, {new: true },function(err, response) {
                        

                        console.log(response);


                    });



                    res.send("2");



                }





        } catch(error){
            console.error(error);
        }



    })();


    


});


module.exports = router;