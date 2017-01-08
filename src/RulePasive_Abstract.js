module.exports = class RulePasive_Abstract{

    constructor(nameRule) {
        this.nameRule = nameRule;
    }

    getNameRule(){
        return this.nameRule;
    }

    execute(){
        if (!this.conditionRule()) {
            this.behaviorRule();
        }

        return !this.conditionRule();
    }


    conditionRule(){
        //override
    }

    behaviorRule(){
      //override
    }
}

