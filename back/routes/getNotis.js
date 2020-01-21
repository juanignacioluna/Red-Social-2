var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');

router.get("/", (req, res) => {


    (async () => {



        try{


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


            await mongoose.connect("mongodb://localhost:27017", {
                dbName: 'socialnet02',
                useNewUrlParser: true
            });






            const ahBo = await Noti.find({ receptor: session.arroba }, null, {sort: {'_id': -1}} );



            res.send(ahBo);

            




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;