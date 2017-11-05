var orm = require("../config/orm.js");


var ormModel = {
	showDb:function(){
      orm.selectAll("burgers");
	},
	addBurger:function(burgerName){
		orm.insertOne("burgers","burger_name","devoured",burgerName,false);
	},
	changeBurgerstatus:function(burgerId){
		orm.updateOne("burgers","devoured",true,"id",burgerId);
	}
};



//ormModel.showDb();
//ormModel.addBurger("pico burger");
//ormModel.changeBurgerstatus(2);

module.exports = ormModel;
