const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("RuleActive_Abstract");


module.exports  = class RuleRenovateCreeps extends Rule_Abstract{

    constructor() {
        super("RenovateCreeps ");
    }

    conditionRule(){
        var listRole = [constants.H];

    }

    behaviorRule() {

    }
};
