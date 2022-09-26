const Employee = require("./Employee");

class Intern extends Employee {
  constructor(id, email, name, school) {
    this.school = school;
    super (id, email, name);
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern'
  }
}

module.exports = Intern;
