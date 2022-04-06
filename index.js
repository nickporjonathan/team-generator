const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const Questions = require("./lib/Questions");
const Template = require("./src/Template");
const { writeFile, copyFile } = require("./src/Generate");

let team = [];

function CreateManager() {
  inquirer.prompt(Questions.manager).then(function newEmployee(data) {
    let newManager = new Manager(data.name, data.id, data.email, data.office);
    team.push(newManager);
    CreateTeam();
  });
}
