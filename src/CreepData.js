module.exports = class CreepData{

    constructor(name,role) {
        this.name = name;
        this.role = role;
    }

    getNameCreepData(){
        return this.name;
    }

    getRoleCreepData(){
        return this.role;
    }

}
