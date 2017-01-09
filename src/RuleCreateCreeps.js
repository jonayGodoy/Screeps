//var callGame = require('CallGame');
var RuleActive_Abstract = require("RuleActive_Abstract");


module.exports  = class RuleCreateCreeps extends RuleActive_Abstract{

    constructor(quantity, role,callGame) {
        super("CreateCreep "+role,callGame);
        this.quantity = quantity;
        this.role = role;
    }

    conditionRule(){
        let roleListCreeps = this.callGame.findCreepersForRole(this.role);
        return (roleListCreeps.length >= this.quantity);
    }

    behaviorRule() {
        this.callGame.createCreeper(this.role);
    }
};
