var RuleActive_Abstract = require("RuleActive_Abstract");
var callGame = require('CallGame');
module.exports  = class RuleBuildStructures  extends RuleActive_Abstract{


    constructor(quantity,requiredLevel,structure_types) {
        //5//2//FIND_CONSTRUCTION_SITES
        super("BuildStructures");
        this.quantity = quantity;
        this.requiredLevel = requiredLevel;
        this.structure_types = structure_types;
    }

    conditionRule(){
        let room = callGame.getFirstSpawn().room;
        let levelRoom = room.controller.level;
        let numberSites =   this.numberSitesStructure(room, this.structure_types);


        return (levelRoom <= this.requiredLevel) && (numberSites >= this.quantity);
    }

    behaviorRule(){
        //override
    }

    numberSitesStructure(room,structure_types) {
        return room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == structure_types );
            }
        }).length;
    }


};

