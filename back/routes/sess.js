var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {

    if (req.session.arroba) {
        res.send(req.session.arroba);
        console.log('req.session.arroba');
      } else {
        res.send(req.session); 
        console.log("NAATI");
    }

    console.log("SSSSSSSSSSSSSSSSSSSSSSSSS");

});




module.exports = router;