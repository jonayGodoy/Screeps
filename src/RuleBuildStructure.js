var Rule_Abstract = require("Rule_Abstract");
var callGame = require('CallGame');
module.exports  = class RuleBuildStructures  extends Rule_Abstract{


    constructor(quantity,pos,requiredLevel,structure_types) {
      //  firstSpawn.pos//5//2//STRUCTURE_EXTENSION
        super("BuildStructures ");
        this.quantity = quantity;
        this.requiredLevel = requiredLevel;
        this.structure_type = structure_types;
        this.startCoordinate = pos;
        this.room = callGame.getFirstSpawn().room;
    }

    conditionRule(){
        let levelRoom = this.room.controller.level;
        let numberSites =   this.numberSitesStructure();

        return (levelRoom >= this.requiredLevel) && (numberSites < this.quantity);
    }

    behaviorRule(){
        let numberSiteExtensions = this.numberSitesStructure();

        if(numberSiteExtensions < this.quantity){
            this.generateExtensionParallelDownToSpawn();
        }
    }

    numberSitesStructure() {
        return this.room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == this.structure_type );
            }
        }).length;
    }



    generateExtensionParallelDownToSpawn() {

        let marginX = parseInt((-((this.quantity)/2)));
        let marginY = +2;
        for (let i = marginX; i < this.quantity + marginX; i++) {
            //incidencia extraer un metodo
            if (!this.existStructure()) {
                this.room.createConstructionSite(this.startCoordinate.x + i, this.startCoordinate.y +marginY, this.structure_type)
            }

        }
    };

    existStructure(){
        let structureExtension = this.room.find(FIND_CONSTRUCTION_SITES, {
            filter: (structure) => {
                return (structure.structureType == this.structure_type) &&
                    (structure.pos.x != this.startCoordinate.x) &&
                    (structure.pos.y != this.startCoordinate.y);
            }
        });

        return (structureExtension[0] != null || structureExtension[0] != undefined);
    }

};

