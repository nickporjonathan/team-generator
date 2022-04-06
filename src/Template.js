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
