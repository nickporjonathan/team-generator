const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, email, id, officeNumber) {
    super(name, email, id);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
  getOffice() {
    return this.officeNumber;
  }
}

module.exports = Manager;
