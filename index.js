const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');
const chalk = require("chalk");
const path = require('path');
const fs = require('fs');
const generateTeam = require('./src/page-template.js');
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
                htmlBuilder();
        };
    });
    function addManager() {
        inquirer.prompt([
            {type: 'input', name: 'manId', message: 'What is the managers ID?'},
            {type: 'input', name: 'manEmail', message: 'What is the managers email?'},
            {type: 'input', name: 'manName', message: 'What is the managers name?'},
            {type: 'input', name: 'manOffice', message: 'What is the managers office number?'},
        ]).then(answers => {
            const manager = new Manager(answers.manId, answers.manEmail, answers.manName, answers.manOffice)
            team.push(manager);
            buildTeam();
        })
    };
};
buildTeam();