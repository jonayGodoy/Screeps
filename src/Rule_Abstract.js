module.exports = class Rule_Abstract{

    constructor(nameRule) {
        this.nameRule = nameRule;
        this.done = false;
    }

    getNameRule(){
        return this.nameRule;
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

