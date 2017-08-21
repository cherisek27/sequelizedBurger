//Node dependencies 
var express = require("express"); 
var router = express.Router(); 
//Import the model (burger.js) to use its database functions
var db = require("../models"); 

//Create all routes and set up logic within those routes where required
//Redirects to index page
router.get("/", function(req, res) {  
  res.redirect("/burgers");
});

//Renders all burgers to DOM
router.get("/burgers", function(req, res) { 
  db.Burgers.findAll({ 
    order: [
      ["burger_name", "ASC"]
    ]
  }).then(function(allBurgers) {

    var hbsObject = {
      burgers: allBurgers
    }; 
    res.render("index", hbsObject);
  });
}); 

router.post("/create", function(req, res) { 
  db.Burgers.create({
    burger_name: req.body.burger_name
  }).then(function() { 
    res.redirect("/burgers");
  });
}); 

router.post("/update/:id", function(req, res) { 
 db.Burgers.update({
    devoured: req.body.devoured
 },{
   where: {
    id: req.params.id
    }
  }).then(function() {
    res.redirect("/burgers");
  });
}); 


//Export route
module.exports = router; 