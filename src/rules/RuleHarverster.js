class RuleHarverster{

    execute(){
        if(harvesters.length < 2) {
            var newName = Game.spawns[spawn1].createCreep([WORK,CARRY,MOVE], undefined, {role: constants.HARVESTER()});
            return false;
        }else{
          return true;
        }
    }
}
