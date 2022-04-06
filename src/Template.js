function GenerateContent(data) {
  let cards = [];
  data.forEach((element) => {
    if (element.role === "Manager") {
      let card = `<div class = "card col-2">
          <h2 class = 'name'>${element.name}</h2>
          <h2 class = 'role'>${element.role}</h2>
          <h5 class = 'id'>ID: ${element.id}</h5>
          <h5 class = 'email'>Email: ${element.email}</h5>
          <h5 class = 'last'>Office #: ${element.officeNumber}</h5>
          </div>`;
      cards.push(card);
    } else if (element.role === "Engineer") {
      let card = `<div class = "card col-2">
      <h2 class = 'name'>${element.name}</h2>
      <h2 class = 'role'>${element.role}</h2>
      <h5 class = 'id'>ID: ${element.id}</h5>
      <h5 class = 'email'>Email: ${element.email}</h5>
      <h5 class = 'last'>Github: ${element.github}</h5>
      </div>`;
      cards.push(card);
    } else if (element.role === "Intern") {
      let card = `<div class = "card col-2">
        <h2 class = 'name'>${element.name}</h2>
        <h2 class = 'role'>${element.role}</h2>
        <h5 class = 'id'>ID: ${element.id}</h5>
        <h5 class = 'email'>Email: ${element.email}</h5>
        <h5 class = 'last'>School: ${element.school}</h5>
        </div>`;
      cards.push(card);
    } else {
      console.log("error");
    }
  });
  return cards;
}

function GeneratePage(data) {
  return `
  <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Staff Profiles</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <h1 class = "head-text">Staff</h1>
        </header>
        <section class = "content container text-center">
            <h2>Our Team</h2><br>
            <div class = "card-holder row col-8">
                ${GenerateContent(data)}
            </div>
        </section><br>
        <footer class = "container-fluid text-center">
            <p class = "col-3 foot1">Profile Generator for Teams</p>
            <p class = "col -3 foot2">Constructed by Jonathan Nickpor</p>
        </footer>    
    </body>
    </html>`;
}
