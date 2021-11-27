const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('Should represent an object with the properties of an Engineer', () => {
        const engineer = new Engineer('Dave', 10, 'dave@example.com', 'daveGit');

        expect(engineer.name).toBe('Dave');
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toBe('dave@example.com');
        expect(engineer.github).toBe('daveGit');
    });
});