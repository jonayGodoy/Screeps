var RulePasive_Abstract = require('./RulePasive_Abstract');
module.exports = class RuleActive_Abstract extends RulePasive_Abstract{

    constructor(nameRule) {
        super(nameRule);
        this.done = false;
    }

    setDone(done){
        this.done = done;
    }

    execute(){
        if(!this.done){
            this.done = this.conditionRule();

            if (this.done) {
                return this.done;
            } else {
                this.behaviorRule();
            }
        }
        return this.done;
    }


    conditionRule(){
        //override
    }

    behaviorRule(){
      //override
    }
}

