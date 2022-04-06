const manager = [
  {
    type: "text",
    name: "name",
    message: "What's your name?",
  },
  {
    type: "int",
    name: "id",
    message: "What's your Employee ID?",
  },
  {
    type: "text",
    name: "email",
    message: "What's your email?",
  },
  {
    type: "int",
    name: "office",
    message: "What's your office number?",
  },
];

const team = [
  {
    type: "confirm",
    name: "addMember",
    message: "Who is on your team?",
    default: true,
  },
  {
    type: "list",
    name: "role",
    message: "What roles do you have on your team?",
    choices: ["Engineer", "Intern"],
    when: ({ addMember }) => addMember,
  },
];

const engineer = [
  {
    type: "text",
    name: "name",
    message: "What's your Engineer's name?",
  },
  {
    type: "int",
    name: "id",
    message: "What's the Employee ID of your Engineer?",
  },
  {
    type: "text",
    name: "email",
    message: "What's the email of your Engineer?",
  },
  {
    type: "text",
    name: "github",
    message: "What's the Github Username of your Engineer?",
  },
];

const intern = [
  {
    type: "text",
    name: "name",
    message: "What's your Intern's name?",
  },
  {
    type: "int",
    name: "id",
    message: "What's the Employee ID of your Intern?",
  },
  {
    type: "text",
    name: "email",
    message: "What's the email of your Intern?",
  },
  {
    type: "text",
    name: "school",
    message: "What's the school your Intern attended?",
  },
];

const finish = [
  {
    type: "confirm",
    name: "finish",
    message: "Is your team complete?",
  },
];

module.exports = {
  manager,
  team,
  engineer,
  intern,
  finish,
};
