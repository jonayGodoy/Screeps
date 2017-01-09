var callGame = require('CallGame');
var RuleActive_Abstract = require("RuleActive_Abstract");


module.exports  = class RuleCreateCreeps extends RuleActive_Abstract{

    constructor(quantity, role) {
        super("CreateCreep "+role);
        this.quantity = quantity;
        this.role = role;
    }

    conditionRule(){
        let roleListCreeps = callGame.findCreepersForRole(this.role);
        return (roleListCreeps.length >= this.quantity);
    }

    behaviorRule() {
        callGame.createCreeper(this.role);
    }
};
