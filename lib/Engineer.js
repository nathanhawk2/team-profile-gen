const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, email, name, github) {
    this.github = github;
    super (id, email, name);
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer;
