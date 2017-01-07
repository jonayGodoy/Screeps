
 class Constants {

    //const incidencia
     constructor() {
         this.harvester = "harvester";
         this.upgrader = "upgrader";
         this.builder = "builder";
     }


     HARVESTER() {
         return this.harvester;
     }


     UPGRADER() {
         return this.upgrader;
     }

     BUILDER() {
         return this.builder;
     }

};

module.exports  = new Constants();

