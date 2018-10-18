class Shield {

    constructor() {
        this._subSystems = ['engine', 'weapons', 'shield'];
        this._isUp = false;
        this._energyLevel = 9001;
    }

    get isUp() {
        return this._isUp && this._energyLevel > 0;
    }

    get energyLevel() {
        return this._energyLevel;
    }

    beRaised() {
        this._isUp = true;
    }

    transferEnergy(energyToTransfer) {
        this._energyLevel = Math.max(0, Math.min(this._energyLevel + energyToTransfer, 10000));
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomSubsystem() {
        let randomNumber = this.getRandomInt(0, this._subSystems.length - 1);
        return this._subSystems[randomNumber];
    }

    takesHit(damage) {
        if(this._isUp) {
            this._energyLevel = Math.max(0, this._energyLevel - damage);
        }
    }
}