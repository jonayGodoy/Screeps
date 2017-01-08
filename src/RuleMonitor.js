const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");

module.exports = class RuleMonitor extends Rule_Abstract{

    constructor() {
        super("RuleMonitor");
    }

    conditionRule(){
        let monitors = callGame.findCreepersForRole(constants.MONITOR());

        return (monitors.length >= 1);
    }

    behaviorRule(){
         callGame.createCreeper(constants.MONITOR());
    }
};
