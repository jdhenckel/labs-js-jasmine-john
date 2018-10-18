
// ship tests

describe('the ship', ()=>{
    let ship;
    let shield;
    beforeEach(() => {
        shield = new Shield();
        ship = new Ship([shield]);
    });
    it('should have subsystems',()=>{
        expect(ship._subSystems.length).toBe(1);
    })
    it('should return random subsystems',()=>{
        expect(ship.randomSubsystem()).toBe(shield);
    })
})