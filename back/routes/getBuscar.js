var express = require('express');
var router = express.Router();
var session = require('express-session');

router.get("/", (req, res) => {


    (async () => {



        try{


            res.send(session.buscar);

            




        } catch(error){
            console.error(error);
        }



    })();


    


});




module.exports = router;