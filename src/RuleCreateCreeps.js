var callGame = require('CallGame');
var RuleActive_Abstract = require("RuleActive_Abstract");


module.exports  = class RuleCreateCreeps extends RuleActive_Abstract{

    constructor(quantity, role) {
        super("CreateCreep "+role);
        this.quantity = quantity;
        this.role = role;
        this.contParche = 0;

    }

    conditionRule(){
        let roleListCreeps = callGame.findCreepersForRole(this.role);


        let condition = (roleListCreeps.length >= this.quantity);;

        this.contParche = roleListCreeps.length;

        return condition;
    }

    behaviorRule() {
       let info = callGame.createCreeper(this.role+"_"+this.contParche,this.role);
        console.log(info);
    }
};
