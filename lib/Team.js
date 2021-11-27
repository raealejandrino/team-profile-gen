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
    inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log( "\nPlease enter your team manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the team manager's employee ID number?",
            validate: managerIdInput => {
                // if (managerIdInput && typeof managerIdInput === 'number') {
                //     return true;
                // } else {
                //     console.log("\nPlease enter a valid employee ID number for your team manager!");
                //     return false;
                // }
                if (managerIdInput) {
                    return true;
                
                } else {
                    console.log("\nPlease enter a valid employee ID number for your team manager!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: managerEmailInput => {
                // if (managerEmailInput && managerEmailInput.indexOf("@") != -1 && managerEmailInput.indexOf(".") != -1) {
                //     return true;
                // } else {
                //     console.log("\nPlease enter a valid email address.");
                //     return false;
                // }
                if (managerEmailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        return true;
                } else {
                        console.log("\nPlease enter a valid email address.");
                        return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNum',
            message: "What is the team manager's office number?",
            validate: managerOfficeNumInput => {
                if (managerOfficeNumInput) {
                    return true;
                } else {
                    console.log("\nPlease enter the valid office number of your team manager.");
                    return false;
                }
            }
        }])
        .then(({ name, id, email, officeNum }) => {
            this.manager = new Manager(name, id, email , officeNum);

            console.log(this.manager);
        });
};




module.exports = Team;