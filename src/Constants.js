
 class Constants {

    //const incidencia
     constructor() {
         this.harvester = "harvester";
         this.upgrader = "upgrader";
         this.builder = "builder";
         this.monitor = "monitor";
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

     MONITOR(){
         return this.monitor;
     }
};

module.exports  = new Constants();

