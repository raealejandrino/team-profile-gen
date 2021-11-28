const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('../src/page-template');
const writeFile = require('../utils/generate-site');

function Team() {
    this.manager;
    this.employees = [];
    
    
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

            // console.log(this.manager);

            this.initializeTeam();
        });
};






Team.prototype.initializeTeam = function() {
    inquirer
        .prompt([{

            type: 'list',
            name: 'employeeType',
            message: "Select which type of employee you'd like to add",
            choices: ['Engineer', 'Intern', "I don't want to add more employees"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log( "\nPlease enter the engineer's name!");
                    return false;
                }
            },
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the engineer's employee ID number?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerIdInput => {
                // if (engineerIdInput && typeof engineerIdInput === 'number') {
                //     return true;
                // } else {
                //     console.log("\nPlease enter a valid employee ID number for your team engineer!");
                //     return false;
                // }
                if (engineerIdInput) {
                    return true;
                
                } else {
                    console.log("\nPlease enter a valid employee ID number for the engineer.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerEmailInput => {
                // if (engineerEmailInput && engineerEmailInput.indexOf("@") != -1 && engineerEmailInput.indexOf(".") != -1) {
                //     return true;
                // } else {
                //     console.log("\nPlease enter a valid email address.");
                //     return false;
                // }
                if (engineerEmailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        return true;
                } else {
                        console.log("\nPlease enter a valid email address.");
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUser',
            message: "What is the engineer's GitHub username?",
            when: ({ employeeType }) => {
                if (employeeType === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: engineerGithubUserInput => {
                if (engineerGithubUserInput) {
                    return true;
                } else {
                    console.log("\nPlease enter the engineer's Github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internNameInput => {
                if (internNameInput) {
                    return true;
                } else {
                    console.log( "\nPlease enter the intern's name!");
                    return false;
                }
            },
        },
        {
            type: 'number',
            name: 'id',
            message: "What is the intern's employee ID number?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internIdInput => {
                // if (internIdInput && typeof internIdInput === 'number') {
                //     return true;
                // } else {
                //     console.log("\nPlease enter a valid employee ID number for your team intern!");
                //     return false;
                // }
                if (internIdInput) {
                    return true;
                
                } else {
                    console.log("\nPlease enter a valid employee ID number for the intern.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internEmailInput => {
                // if (engineerEmailInput && engineerEmailInput.indexOf("@") != -1 && engineerEmailInput.indexOf(".") != -1) {
                //     return true;
                // } else {
                //     console.log("\nPlease enter a valid email address.");
                //     return false;
                // }
                if (internEmailInput.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        return true;
                } else {
                        console.log("\nPlease enter a valid email address.");
                        return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school name?",
            when: ({ employeeType }) => {
                if (employeeType === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            },
            validate: internSchoolInput => {
                if (internSchoolInput) {
                    return true;
                } else {
                    console.log("\nPlease enter the intern's school name.");
                    return false;
                }
            }
        }
    ])
    .then(({ employeeType, name, id, email, githubUser, school}) => {
        if (employeeType === 'Engineer') {
            this.employees.push(new Engineer(name, id, email, githubUser));

            return this.initializeTeam();
        } else if (employeeType === 'Intern') {
            this.employees.push(new Intern(name, id, email, school));

            return this.initializeTeam();
        } else {

        return generatePage(this.manager, this.employees);
            
        }
    })
    .then(data => {
        return writeFile(data)
    }).then(response => {
        console.log(response.message);
    });

    // writeFile(data);

};



module.exports = Team;