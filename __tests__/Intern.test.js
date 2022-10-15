const Intern = require("../lib/Intern");

describe("Intern", () => {
  it ('sets school', () => {
    const man = new Intern(2, 'nathan@email.com', 'Nathan', 'UNCC');
    const schoolCorrect = 'UNCC';
    expect(man.school).toEqual(schoolCorrect);
  });

  it ('gets school', () => {
    const man = new Intern(2, 'nathan@email.com', 'Nathan', 'UNCC');
    const schoolCorrect = 'UNCC';
    expect(man.getSchool()).toEqual(schoolCorrect);
  });

  it('gets role', () => {
    const man = new Intern(2, 'nathan@email.com', 'Nathan', 'nathanhawk2');
    const roleCorrect = 'Intern';
    expect(man.getRole()).toEqual(roleCorrect);
  });
});
