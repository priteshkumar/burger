var orm = require("../config/orm.js");


var ormModel = {
	showDb:function(cb){
      orm.selectAll("burgers",cb);
	},
	addBurger:function(burgerName,cb){
		orm.insertOne("burgers","burger_name","devoured",burgerName,false,cb);
	},
	changeBurgerstatus:function(burgerId,cb){
		orm.updateOne("burgers","devoured",true,"id",burgerId,cb);
	}
};



//ormModel.showDb();
//ormModel.addBurger("pico burger");
//ormModel.changeBurgerstatus(2);

module.exports = ormModel;
