
var ormModel = require("../models/burger.js")

// Routes
// =============================================================
module.exports = function(app) {

app.get("/", function(req, res) {
  ormModel.showDb(function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    //console.log(data);
    var goodburgers = [];
    var devouredburgers = [];
    for(var i=0;i < data.length;i++){
    	if(data[i].devoured == true){
    		devouredburgers.push(data[i]);
    	}
    	else {
    		goodburgers.push(data[i]);
    	}
    }

    console.log(devouredburgers);
    console.log(goodburgers);
    res.render("index",{burgers:goodburgers,
    					devoured:devouredburgers});
  });


});


app.get("/api/burgers", function(req, res) {
  ormModel.showdb("burgers", function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    console.log(data);
    res.json(data);
  });
});


app.post("/api/burgers", function(req, res) {
    ormModel.addBurger(req.body.burger, function(err, result) {
    if (err) {
      return res.status(500).end();
    }

    console.log({ id: result.insertId });
    res.json({ id: result.insertId });
    
  });
});
 

app.put("/api/burgers/:id", function(req, res) {
  console.log("change burger status to devoured");
  console.log(req.params.id);
  ormModel.changeBurgerstatus(parseInt(req.params.id), function(err, result) {
    if (err) {
      // If an error occurred, send a generic server faliure
      return res.status(500).end();
    } else if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


};
