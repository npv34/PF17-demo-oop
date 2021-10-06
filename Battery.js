const MAX_ENERY = 100;
class Battery {
    constructor() {
        this.energy = MAX_ENERY;
    }

    setEnergy(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreataseEnergy() {
        this.energy--;
    }
}