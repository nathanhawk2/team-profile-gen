const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');
const chalk = require("chalk");
const path = require('path');
const fs = require('fs');
const generateTeam = require('./src/page-template.js');

const outPut = path.resolve(__dirname, 'output');
const out = path.join(outPut, 'team.html')
// const { default: inquirer } = require('inquirer');

team = [];

function buildTeam() {
    inquirer.prompt([{
        type: 'list',
        message: 'What role would you like to add?',
        name: 'addEmployee',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Do not add any more team members'
        ]
    }]).then(function (userInput) {
        switch (userInput.addEmployee) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                createHTML();
        };
    });
    function addManager() {
        inquirer.prompt([
            { type: 'input', name: 'manId', message: 'What is the managers ID?' },
            { type: 'input', name: 'manEmail', message: 'What is the managers email?' },
            { type: 'input', name: 'manName', message: 'What is the managers name?' },
            { type: 'input', name: 'manOffice', message: 'What is the managers office number?' },
        ]).then(answers => {
            const manager = new Manager(answers.manId, answers.manEmail, answers.manName, answers.manOffice)
            team.push(manager);
            buildTeam();
        });
    };
    function addEngineer() {
        inquirer.prompt([
            { type: 'input', name: 'engId', message: 'What is the engineers ID?' },
            { type: 'input', name: 'engEmail', message: 'What is the engineers email?' },
            { type: 'input', name: 'engName', message: 'What is the engineers name?' },
            { type: 'input', name: 'engGit', message: 'What is the engineers GitHub?' },
        ]).then(answers => {
            const engineer = new Engineer(answers.engId, answers.engEmail, answers.engName, answers.engGit)
            team.push(engineer);
            buildTeam();
        });
    };
    function addIntern() {
        inquirer.prompt([
            { type: 'input', name: 'intId', message: 'What is the interns ID?' },
            { type: 'input', name: 'intEmail', message: 'What is the interns email?' },
            { type: 'input', name: 'intName', message: 'What is the interns name?' },
            { type: 'input', name: 'intSchool', message: 'Where does the intern go to school?' },
        ]).then(answers => {
            const intern = new Intern(answers.intId, answers.intEmail, answers.intName, answers.intSchool)
            team.push(intern);
            buildTeam();
        });
    };


    function createHTML() {
        console.log('Generator complete!')
        fs.writeFileSync(out, generateTeam(team), 'utf-8');
    }
    createHTML();
};
buildTeam();