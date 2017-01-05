
 class Constants {
     private  _HARVESTER = "harvester";
     private  _UPGRADER = "upgrader";
     private   _BUILDER = "builder";

     constructor() {
         this._HARVESTER = _HARVESTER;
         this._UPGRADER = _UPGRADER;
         this._BUILDER = _BUILDER;
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


var constant = new Constants();
module.exports  = constant;

