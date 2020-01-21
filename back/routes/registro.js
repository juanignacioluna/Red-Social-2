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
                password: String


            }, {collection: 'users'});


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


            var User = mongoose.model(''+random+'', schema);

            var UserPersonal = mongoose.model(''+(random+1)+'', schemaPersonal);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const ahBo = await User.findOne({arroba: req.body.arroba});  //SELECT


            if(ahBo){
                
                console.log("Usuario con ese arroba ya existente.");
                res.send("0");

            }else{




                const user2 = new UserPersonal({


                    nombreReal: req.body.nombreReal,
                    arroba: req.body.arroba,
                    password: req.body.password,
                    biografia: "Escriba su biografia...",
                    seguidores: 0,    
                    siguiendo: 0, 
                    imagen: "fotos/user.png"
    
    
    
                });

                await user2.save();  //CREAR




                const user1 = new User(req.body);

                await user1.save();  //CREAR

                session.arroba = req.body.arroba;

                console.log("usuario creado");

                res.send("1");

            }




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;
