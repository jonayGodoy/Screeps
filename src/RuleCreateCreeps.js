var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");


module.exports  = class RuleCreateCreeps extends Rule_Abstract{

    constructor(quantity, role) {
        super("CreateCreep "+role);
        this.quantity = quantity;
        this.role = role;
        this.contParche = 0;
    }

    conditionRule(){
        let roleListCreeps = callGame.findCreepersForRole(this.role);
    //    console.log("lista "+ roleListCreeps.length+" quantity "+this.quantity);
        return (roleListCreeps.length < this.quantity);
    }

    behaviorRule() {
        let roleListCreeps = callGame.findCreepersForRole(this.role);

        let result = callGame.createCreeper(this.role+"_"+roleListCreeps.length,this.role);

        return callGame.isCreateCreep(result);

    }
};
