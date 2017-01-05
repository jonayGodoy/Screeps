
var constant = class Constants {
     private  _HARVESTER = "harvester";
     private  _UPGRADER = "upgrader";
     private   _BUILDER = "builder";

     constructor() {
         this._HARVESTER = _HARVESTER;
         this._UPGRADER = _UPGRADER;
         this._BUILDER = _BUILDER;
     }

     public  HARVESTER() {
         return _HARVESTER;
     }

     public get UPGRADER() {
         return _UPGRADER;
     }
     public get BUILDER() {
         return _BUILDER;
     }

};

module.exports  = constant;

