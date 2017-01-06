const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");

var ruleHarverster = class RuleHarverster extends Rule_Abstract{

    constructor() {
        super("RuleHarverster");
    }

    conditionRule(){
        let harvesters = callGame.findCreepersForRole(constants.HARVESTER());

        return (harvesters.length >= 2);
    }

    behaviorRule(){
         callGame.createCreeper(constants.HARVESTER());
    }
}
module.exports = ruleHarverster;