//incidencia falta de interface
const constants = require('Constants');
var Rule_Abstract = require("Rule_Abstract");

var ruleBuildExtension = class RuleBuildExtension extends Rule_Abstract{
    //status done
    constructor() {
        super("RuleBuildExtension");
    }


    execute(){
        if(!this.done){
            this.done = this.behaviorRule();
        }
        return this.done;
    }

    conditionRule(){
        //Game.spawns['Spawn1'].room.controller.activateSafeMode();
        var firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }


        let room = firstSpawn.room;

        let levelRoom = room.controller.level;


        let numberSiteExtensions =  room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == STRUCTURE_EXTENSION );
            }
        }).length;

        let builders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.BUILDER());

        let conditionDone = (levelRoom <= 2) && (numberSiteExtensions >= 5) && (builders.length >= 2);

        return conditionDone;
    }



    behaviorRule() {
        var firstSpawn;
        for(var name in Game.spawns){
            if(firstSpawn == null)
                firstSpawn = Game.spawns[name];
        }

        let room = firstSpawn.room;

            let numberSiteExtensions =  room.find(FIND_CONSTRUCTION_SITES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION );
                }
            }).length;

            if(numberSiteExtensions < 5){
                this.generateExtensionParallelRightToSpawn(firstSpawn.pos,5,room);
            }

            let info = firstSpawn.createCreep([WORK,CARRY,MOVE], undefined, {role: constants.BUILDER()});

        }

    generateExtensionParallelRightToSpawn(posFirstSpawn, numberExtension,room) {
        for (let i = 1; i < numberExtension + 1; i++) {
            //incidencia extraer un metodo
            let structureExtensionExist = room.find(FIND_CONSTRUCTION_SITES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION) &&
                        (structure.pos.x != posFirstSpawn.x + i) &&
                        (structure.pos.y != posFirstSpawn.y);
                }
            });

            if (structureExtensionExist[0] == null || structureExtensionExist[0] == undefined) {
                room.createConstructionSite(posFirstSpawn.x + i, posFirstSpawn.y + 3, STRUCTURE_EXTENSION)
            }

        }
    };
}
module.exports = ruleBuildExtension;
