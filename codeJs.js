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
