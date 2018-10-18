class Shield {

    constructor() {
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

    takesHit(weaponEnergy) {
        var remainder = 0;
        if(this._isUp) {
            if (weaponEnergy > this._energyLevel) {
                remainder = weaponEnergy - this._energyLevel;
                this._energyLevel = 0;
            }
            else {
                this._energyLevel -= weaponEnergy;
            }
        }
        else remainder = weaponEnergy;
        return remainder;
    }
}