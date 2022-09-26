const { off } = require("process");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(id, email, name, officeNumber) {
    this.officeNumber = this.officeNumber;
    super (id, email, name);
  }
  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager'
  }
}

module.exports = Manager;
