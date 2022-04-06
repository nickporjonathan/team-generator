import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import { prompt } from "inquirer";
import { manager } from "./lib/Questions";
import Template from "./src/Template";
import { writeFile, copyFile } from "./src/Generate";

let team = [];

function CreateManager() {
  prompt(manager).then(function newEmployee(data) {
    let newManager = new Manager(data.name, data.id, data.email, data.office);
    team.push(newManager);
    CreateTeam();
  });
}

