//incidencia falta de interface
const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");


var ruleUpgrader = class RuleUpgrader extends Rule_Abstract{

    constructor() {
        super("RuleUpgrader");
    }

    conditionRule(){
        let upgraders = callGame.findCreepersForRole(constants.UPGRADER());


        return (upgraders.length >= 2);
    }

    behaviorRule() {
        callGame.createCreeper(constants.UPGRADER());
    }
}
module.exports = ruleUpgrader;