const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('Should create an Intern object', () => {
        //setup
        const intern = new Intern('Dave', 10, 'dave@example.com', 'Example University');

        //execute

        //assertions
        expect(intern.name).toBe('Dave');
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toBe('dave@example.com');
        expect(intern.school).toBe('Example University');
    });
});

