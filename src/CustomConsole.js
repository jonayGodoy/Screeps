var callGame = require('CallGame');
class CustomConsole{
    printCostPart(partsCreep){
        let stringListParts = "the parts are "
        for(var part in partsCreep){
            stringListParts = stringListParts+part+" ";
        }

        let result = "and how much is "+callGame.calculateCostCreep(partsCreep)+" units.";
        return stringListParts+"\n "+result;
    }

}

module.exports = new CustomConsole();