const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('Should represent an object with properties of a Manager', () => {

        const manager = new Manager('Dave', 10, 'dave@example.com', 20);


        expect(manager.name).toBe('Dave');
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toBe('dave@example.com');
        expect(manager.officeNum).toEqual(expect.any(Number));
    });
});