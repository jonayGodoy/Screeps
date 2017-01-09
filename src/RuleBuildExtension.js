//incidencia falta de interface
const constants = require('Constants');
var callGame = require('CallGame');
var RuleActive_Abstract = require("RuleActive_Abstract");

module.exports = class RuleBuildExtension extends RuleActive_Abstract{
    //status done
    constructor() {
        super("BuildExtension");
    }

    conditionRule(){
        //Game.spawns['Spawn1'].room.controller.activateSafeMode();
        let room = callGame.getFirstSpawn().room;
        let levelRoom = room.controller.level;
        let numberSiteExtensions =   this.numberSitesExtensions(room);
        let builders = callGame.findCreepersForRole(constants.BUILDER());


        return (levelRoom <= 2) && (numberSiteExtensions >= 5) && (builders.length >= 2);
    }



    behaviorRule() {
        let firstSpawn = callGame.getFirstSpawn();
        let room = firstSpawn.room;
        let numberSiteExtensions = this.numberSitesExtensions(room);

        let quantity = 5;
        if(numberSiteExtensions < quantity){
                this.generateExtensionParallelRightToSpawn(firstSpawn.pos,quantity,room);
            }

        callGame.createCreeper("monitor1",constants.BUILDER());

        }



    generateExtensionParallelRightToSpawn(posFirstSpawn, numberExtension,room) {

        let margin = 3;
        for (let i = margin; i < numberExtension + margin; i++) {
            //incidencia extraer un metodo
            if (!this.existStructureExtension(posFirstSpawn,room)) {
                room.createConstructionSite(posFirstSpawn.x + i, posFirstSpawn.y, STRUCTURE_EXTENSION)
            }

        }
    };

    existStructureExtension(posFirstSpawn,room){
        let structureExtension = room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION) &&
                    (structure.pos.x != posFirstSpawn.x + i) &&
                    (structure.pos.y != posFirstSpawn.y);
            }
        });

        return (structureExtension[0] != null || structureExtension[0] != undefined);
    }

    numberSitesExtensions(room) {
        return room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION );
            }
        }).length;
    }
};

