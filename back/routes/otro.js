var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require('express-session');


router.post("/", (req, res) => {


    (async () => {



        try{


                session.otro = req.body.arroba;

                console.log(req.body.arroba);

                res.send(session.otro);





        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;