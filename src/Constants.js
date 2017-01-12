
 class Constants {

    //const incidencia
     constructor() {
         this.harvester = "harvester";
         this.upgrader = "upgrader";
         this.builder = "builder";
         this.monitor = "monitor";
         this.rule_active = 0;
         this.rule_active_state = 1;
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

     RULE_ACTIVE() {
         return  this.rule_active;
     }

     RULE_ACTIVE_STATE(){
         return this.rule_active_state;
     }


};

module.exports  = new Constants();

