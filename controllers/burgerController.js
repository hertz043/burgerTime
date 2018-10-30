
var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };

      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {

    burger.create(req.body.burger_name, function(data) {
        res.json(data.insertId);
    })
});
  
router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id;
    burger.update(id, function(result){
        if(result.changedRows ===0 ){
            return res.status(404).end();
        }
        res.status(200).end()

    })
})

module.exports = router;