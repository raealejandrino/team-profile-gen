const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Should represent an object with properties of an Employee', () => {
        const employee = new Employee('Dave', 10, 'dave@example.com');

        expect(employee.name).toBe('Dave');
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toBe('dave@example.com');
    });
});