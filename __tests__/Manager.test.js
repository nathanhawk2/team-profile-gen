const Manager = require("../lib/Manager");

describe("Manager", () => {
  it('sets office number', () => {
    const man = new Manager(2, 'nathan@email.com', 'Nathan', 101);
    const officeNumCorrect = 101;
    expect(man.officeNumber).toEqual(officeNumCorrect);
  });

  it('gets role', () => {
    const man = new Manager(2, 'nathan@email.com', 'Nathan', 101);
    const roleCorrect = 'Manager';
    expect(man.getRole()).toEqual(roleCorrect);
  });
});

