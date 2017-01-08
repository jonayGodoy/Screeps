var callGame = require('CallGame');
class CustomConsole{
    printCostPart(partsCreep){
        let stringListParts = "the parts are "
        for(var index in partsCreep){
            stringListParts = stringListParts+partsCreep[index]+" ";
        }

        let result = "and how much is "+callGame.calculateCostCreep(partsCreep)+" units.";
        return stringListParts+"\n "+result;
    }

}

module.exports = new CustomConsole();