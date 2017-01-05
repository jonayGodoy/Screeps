class mainIA{


    constructor() {
        this.rulesList = [];
    }

    update(){
        for(var number in  this.rulesList){
           rule = rulesList[number];
            rule.execute();
        }
    }

}
