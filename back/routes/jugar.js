var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


router.post("/", (req, res) => {



    (async () => {



        try{

            var schema = new mongoose.Schema({

                name: String,

                email: String,

                edad: Number,

                isEpic: Boolean,

                notas: [Number]


            }, {collection: 'jugando'});



            var random = Math.random();


            var User = mongoose.model(''+random+'', schema);

            
            
            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });


            const user1 = new User({


                name: 'leo',

                email: 'leo@gmail.com',

                edad: 24,

                isEpic: 0,

                notas: [1,2,3,4]



            });


            await user1.save();  //CREAR


            const ahBo = await User.findOne({name:'leo'});  //SELECT

            ahBo.set({  //EDITAR

                name: 'SDSASDASD',

                isEpic: 1

            });


            await ahBo.save();  //EDITAR



            // const ahBo2 = await User.findOne({name: 'javier'});  //SELECT

            // await ahBo2.remove();



            // await User.find({name: 'SDSASDASD'}).remove();  //borrar todo





            console.log("JUGANDDAAA");

        } catch(error){
            console.error(error);
        }



    })();


    


});


module.exports = router;