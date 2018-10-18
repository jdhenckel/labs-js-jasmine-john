describe('shield', function() {
    let shield;

    beforeEach(() => {
        shield = new Shield();
    });

    it('starts out lowered', function() 
    {
        expect(shield.isUp).toBe(false);
    });

    it('can be raised', function() 
    {
        shield.beRaised();
        expect(shield.isUp).toBe(true);
    });

    it('should start with energy level of 9001', function() 
    {
        shield.beRaised();
        expect(shield.energyLevel).toBe(9001);
    });

    it('should have maximum of 10000', function() 
    {
        shield.transferEnergy(1000);
        expect(shield.energyLevel).toBe(10000);
    });

    it('should have minumun of 0', function() 
    {
        shield.transferEnergy(-9002);
        expect(shield.energyLevel).toBe(0);
    });

    it('shield depletes on hit', function() {
        shield.takesHit(100);
        expect(shield.energyLevel).toBe(8901);
    })
});