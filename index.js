import Manager from "./lib/Manager";
import Engineer from "./lib/Engineer";
import Intern from "./lib/Intern";
import inquirer, { prompt } from "inquirer";
import { manager } from "./lib/Questions";
import Template from "./src/Template";
import { writeFile, copyFile } from "./src/Generate";

let team = [];

function CreateManager() {
  prompt(manager).then((data) => {
    let newManager = new Manager(data.name, data.id, data.email, data.office);
    team.push(newManager);
    CreateTeam();
  });
}

function CreateTeam() {
  inquirer.prompt(Questions.team).then((data) => {
    if (data.addMember) {
      if (data.role === "Engineer") {
        CreateEngineer();
      } else if (data.role === "Intern") {
        CreateIntern();
      } else {
        console.log("error");
      }
    } else if (!data.addMember) {
      CreateFiles();
    } else {
      console.log("error");
    }
  });
}
