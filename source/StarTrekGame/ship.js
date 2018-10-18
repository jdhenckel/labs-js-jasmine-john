
class Ship {

    constructor (listOfSystems) {
        this._subSystems = listOfSystems;
    }


    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randomSubsystem() {
        let randomNumber = this.getRandomInt(0, this._subSystems.length - 1);
        return this._subSystems[randomNumber];
    }


}