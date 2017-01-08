var callGame = require('CallGame');
class CustomConsole{
    printCostPart(partsCreep){
        let stringListParts = "the parts are "
        for(var part in partsCreep){
            stringListParts = stringListParts+part+" ";
        }

        let result = "how much is "+callGame.getCostPartCreep()+" units.";
        return "\n "+result;
    }

}

module.exports = new CustomConsole();