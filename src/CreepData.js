module.exports = class CreepData{

    constructor(id,role) {
        this.id = id;
        this.role = role;
    }

    getIdCreepData(){
        return this.id;
    }

    getRoleCreepData(){
        return this.role;
    }

}
