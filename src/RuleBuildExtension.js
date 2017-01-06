//incidencia falta de interface
const constants = require('Constants');
var callGame = require('CallGame');
var Rule_Abstract = require("Rule_Abstract");

var ruleBuildExtension = class RuleBuildExtension extends Rule_Abstract{
    //status done
    constructor() {
        super("RuleBuildExtension");
    }

    conditionRule(){
        //Game.spawns['Spawn1'].room.controller.activateSafeMode();
        let room = callGame.getFirstRoom();
        let levelRoom = room.controller.level;
        let numberSiteExtensions =   this.numberSitesExtensions(room);
        let builders = callGame.findCreepersForRole(constants.BUILDER());


        return (levelRoom <= 2) && (numberSiteExtensions >= 5) && (builders.length >= 2);
    }



    behaviorRule() {
        var firstSpawn = callGame.getFirstSpawn();
        let room = firstSpawn.room;
        let numberSiteExtensions = this.numberSitesExtensions(room);

        let quantity = 5;
        if(numberSiteExtensions < quantity){
                this.generateExtensionParallelRightToSpawn(firstSpawn.pos,quantity,room);
            }

        callGame.createCreeper(constants.BUILDER());

        }



    generateExtensionParallelRightToSpawn(posFirstSpawn, numberExtension,room) {

        let margin = 3;
        for (let i = margin; i < numberExtension + margin; i++) {
            //incidencia extraer un metodo
            if (!this.existStructureExtension(room)) {
                room.createConstructionSite(posFirstSpawn.x + i, posFirstSpawn.y, STRUCTURE_EXTENSION)
            }

        }
    };

    existStructureExtension(room){
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
}
module.exports = ruleBuildExtension;
