const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Team() {
    this.manager;
    this.intern;
    this.engineer;
    
};

Team.prototype.initializeManager = function() {
    return inquirer
        .prompt({
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID number?",
            validate: managerIdInput => {
                if (managerIdInput && typeof managerIdInput === 'number') {
                    return true;
                } else {
                    console.log("Please enter the valid employee ID number for your team manager!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: managerEmailInput => {
                if (managerEmailInput && managerEmailInput.indexOf("@") != -1 && managerEmailInput.indexOf(".") != -1) {
                    return true;
                } else {
                    console.log("Please enter a valid email address.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is the team manager's office number?",
            validate: managerOfficeNumInput => {
                if (managerOfficeNumInput && typeof managerOfficeNumInput === 'number') {
                    return true;
                } else {
                    console.log("Please enter the valid office number of your team manager.");
                    return false;
                }
            }
        })
        .then(({ name, id, email, officeNum }) => {
            this.manager = new Manager(name, id, email , officeNum);

        });
};