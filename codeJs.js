// Definizione della classe "registroDiCLasse"
class registroDiCLasse {
  studenti = []; // Inizializza un array vuoto per contenere gli studenti

  // Aggiunge uno studente all'array "studenti"
  addStudent(id, nome, cognome) {
    const Student = {
      id: id,
      nome: nome,
      cognome: cognome,
      voti: [{ voto: 0, commento: "", data: "" }], // Inizializza un voto di default per lo studente
    };
    this.studenti.push(Student);
  }

  // Aggiunge un voto a uno studente esistente
  addinterrogazione(id, voto, commento, data) {
    this.studenti.forEach(function (element) {
      if (element.id == id) {
        element.voti.forEach(function (elementdue) {
          // Assegna il voto, il commento e la data allo studente corrispondente
          (elementdue.voto = voto),
            (elementdue.commento = commento),
            (elementdue.data = data);
        });
      } else {
        console.log("L'id non esiste"); // Messaggio di log se l'ID dello studente non esiste
      }
    });
  }
}
// Creazione di un'istanza della classe "registroDiCLasse"
const registro = new registroDiCLasse();

// Aggiunta di event listener al pulsante per la gestione dell'input e della tabella
button.addEventListener("click", () => {
  // Recupero dei valori dall'input
  let id = document.querySelector("#id");
  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let vote = document.querySelector("#vote");
  let comment = document.querySelector("#comment");
  let date = document.querySelector("#date");
  if (
    id.value == "" &&
    firstName.value == "" &&
    lastName.value == "" &&
    vote.value == "" &&
    comment.value == "" &&
    date.value == ""
  ) {
    return;
  } else {
    // Aggiunge uno studente e un voto nel registro
    registro.addStudent(id.value, firstName.value, lastName.value);
    registro.addinterrogazione(id.value, vote.value, comment.value, date.value);
  }

  // Inserisce i dati nella tabella HTML
  let table = document.getElementById("table");
  let rowLength = table.rows.length;
  let newRow = table.insertRow(rowLength);
  var cell0 = newRow.insertCell(0);
  var cell1 = newRow.insertCell(1);
  var cell2 = newRow.insertCell(2);
  var cell3 = newRow.insertCell(3);
  var cell4 = newRow.insertCell(4);
  var cell5 = newRow.insertCell(5);
  cell0.innerHTML = id.value;
  cell1.innerHTML = firstName.value;
  cell2.innerHTML = lastName.value;
  cell3.innerHTML = vote.value;
  cell4.innerHTML = comment.value;
  cell5.innerHTML = date.value;

  // Salva i dati localmente
  localclick();
});
