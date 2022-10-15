const Employee = require("../lib/Employee");

describe("Employee", () => {
  it('sets name', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const nameCorrect = 'Nathan';
    expect(man.name).toEqual(nameCorrect);
  });

  it('sets id', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const idCorrect = 2;
    expect(man.id).toEqual(idCorrect);
  });

  it('sets email', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const emailCorrect = 'nathan@email.com';
    expect(man.email).toEqual(emailCorrect);
  });

  it('gets name', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const nameCorrect = 'Nathan';
    expect(man.getName()).toEqual(nameCorrect);
  });

  it('gets id', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const idCorrect = 2;
    expect(man.getId()).toEqual(idCorrect);
  });

  it('gets email', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const emailCorrect = 'nathan@email.com';
    expect(man.getEmail()).toEqual(emailCorrect);
  });

  it('returns employee', () => {
    const man = new Employee(2, 'nathan@email.com', 'Nathan');
    const roleCorrect = 'Employee';
    expect(man.getRole()).toEqual(roleCorrect)
  });
});
