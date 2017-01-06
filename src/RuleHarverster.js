const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");

var ruleHarverster = class RuleHarverster extends Rule_Abstract{

    constructor() {
        super("RuleHarverster");
    }



    conditionRule(){
        let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.HARVESTER());

        let conditionDone = (harvesters.length >= 2);

        return conditionDone;
    }



    behaviorRule(){
         var info = callGame.createCreeper(constants.HARVESTER());
    }
}
module.exports = ruleHarverster;