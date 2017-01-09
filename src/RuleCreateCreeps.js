var callGame = require('CallGame');
var RuleActive_Abstract = require("RuleActive_Abstract");
var ia = require('IAMain');
var CreepData = require('CreepData');
module.exports  = class RuleCreateCreeps extends RuleActive_Abstract{

    constructor(quantity, role) {
        super("CreateCreep "+role);
        this.quantity = quantity;
        this.role = role;

        this.ParchContador = 0;
    }

    conditionRule(){
        let roleListCreeps = callGame.findCreepersForRole(this.role);
        return (roleListCreeps.length >= this.quantity);
    }

    behaviorRule() {
        if(this.ParchContador <= this.quantity ){
            let name = callGame.createCreeper(this.role);
            this.saveListIAcreepData(name);
            this.ParchContador = this.ParchContador +1;
        }
    }

    saveListIAcreepData(nameCreep){
        //error por bug
        if(this.isCreateCreep(nameCreep)){
            let creep = Game.creeps[nameCreep];
            let creepData = new CreepData(creep.id,creep.memory.role);
            ia.addCreepListData(creepData);
        }
    }
};
