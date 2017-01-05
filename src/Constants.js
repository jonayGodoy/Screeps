
 class Constants {
     private  _HARVESTER = "harvester";
     private  _UPGRADER = "upgrader";
     private   _BUILDER = "builder";

     constructor(HARVESTER, UPGRADER, BUILDER) {
         this._HARVESTER = HARVESTER;
         this._UPGRADER = UPGRADER;
         this._BUILDER = BUILDER;
     }

     public get HARVESTER() {
         return _HARVESTER;
     }

     public get UPGRADER() {
         return _UPGRADER;
     }
     public get BUILDER() {
         return _BUILDER;
     }

};



module.exports  = new Constants();

