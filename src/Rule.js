module.exports = class Rule_Abstract{

    constructor(nameRule) {
        this.nameRule = nameRule;
    }

    getNameRule(){
        return this.nameRule;
    }

    conditionRule(){
        //override
    }

    behaviorRule(){
        //override
    }
}
