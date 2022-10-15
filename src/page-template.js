// create the team
const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `
        <div class="card border border-info col-3 .col-sm-6 mr-3 my-3">
        <div class="card-header bg-primary text-white">
          <i class="fa-solid fa-lg fa-user"></i> Manager
        </div>
        <div class="card-body">
          <h3 class="card-title"> ${manager.getName()} </h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item fw-lighter"> ID: ${manager.getId()}</li>
            <li class="list-group-item fw-lighter"> Email: <span id="email"><a
                  href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></li>
            <li class="list-group-item fw-lighter"> Office Number: ${manager.getOfficeNumber()}</li>
          </ul>
        </div>
      </div>
        `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card border border-info col-3 .col-sm-6 mr-3 my-3">
        <div class="card-header bg-primary text-white">
          <i class="fa-solid fa-lg fa-hammer"></i> Engineer
        </div>
        <div class="card-body">
          <h3 class="card-title"> ${engineer.getName()} </h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item fw-lighter"> ID: ${engineer.getId()}</li>
            <li class="list-group-item fw-lighter"> Email: <span id="email"><a
                  href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
            <li class="list-group-item fw-lighter"> Github Profile: <a target="_blank"
                href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
          </ul>
        </div>
      </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
        <div class="card border border-info col-3 .col-sm-6 mr-3 my-3">
        <div class="card employee-card">
          <div class="card-header bg-primary text-white">
            <i class="fas fa-user-graduate"></i>Intern
          </div>
          <div class="card-body">
            <h3 class="card-title">${intern.getName()}</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</li>
              <li class="list-group-item"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>
      </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    </head>
    
    <body>
        <div class="jumbotron">
            <h1 class="text-center">My Team</h1>
        </div>
        <main>
            <div class="container">
                <div class="row">
                    <div class="row team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};
