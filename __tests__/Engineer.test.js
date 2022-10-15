const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it('sets github', () => {
    const man = new Engineer(2, 'nathan@email.com', 'Nathan', 'nathanhawk2');
    const gitHubCorrect = 'nathanhawk2';
    expect(man.github).toEqual(gitHubCorrect);
  });

  it('gets github', () => {
    const man = new Engineer(2, 'nathan@email.com', 'Nathan', 'nathanhawk2');
    const gitHubCorrect = 'nathanhawk2';
    expect(man.getGithub()).toEqual(gitHubCorrect);
  });

  it('gets role', () => {
    const man = new Engineer(2, 'nathan@email.com', 'Nathan', 'nathanhawk2');
    const roleCorrect = 'Engineer';
    expect(man.getRole()).toEqual(roleCorrect);
  });
});
