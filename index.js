const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const Questions = require("./lib/Questions");
const Template = require("./src/Template");
const { writeFile, copyFile } = require("./src/Generate");

let team = [];


