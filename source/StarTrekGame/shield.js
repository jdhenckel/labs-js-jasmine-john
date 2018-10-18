class Shield {
    constructor() {
        this._isUp = false;
        this._energyLevel = 9001;
    }

    get isUp() {
        return this._isUp;
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
}