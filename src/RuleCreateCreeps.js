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
        return (roleListCreeps.length >= this.quantity);
    }

    behaviorRule() {

        let roleListCreeps = callGame.findCreepersForRole(this.role);



        callGame.createCreeper(this.role+"_"+roleListCreeps.length,this.role);
    }
};
