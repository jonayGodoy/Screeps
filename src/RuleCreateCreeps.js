const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");


module.exports  = class RuleCreateCreeps extends Rule_Abstract{

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
