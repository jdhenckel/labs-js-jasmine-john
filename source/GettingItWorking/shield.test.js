describe('Shield tests', function () {
    var shield;

    beforeEach(function() {
        shield = new Shield();
    });

    it('starts lowered', function () {
        expect(shield.isUp).toBe(false);
    });

    it('can be raised', function () {
        shield.raise();
        expect(shield.isUp).toBe(true);
    });

});