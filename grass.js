let LivingCreature = require('./living_creature')

module.exports = class Grass extends LivingCreature{
    constructor(x,y){
        super(x,y)
    }
}
    