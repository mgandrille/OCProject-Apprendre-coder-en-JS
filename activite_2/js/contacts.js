/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme
function menu () {
  const menus = ["1 - Lister les contacts", "2 - Ajouter un contact", "0 - Quitter"];
  menus.forEach (element => {
    console.log(element);
  });
}

class Contact {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }
  
  decrire() {
    return `Nom : ${this.nom}   Prénom : ${this.prenom}`;
  } 
 
}

const contact1 = new Contact ("Lévisse","Carole");
const contact2 = new Contact ("Nelsonne","Mélodie");

const listeContact = [contact1, contact2];

console.log("Bienvenue dans le gestionnaire de contacts !");
let i = 1;
while (i !== 0) {
 menu();
  const nb = Number(prompt("Choisissez une option"));
  switch (nb) {
    case 1 :    
      // affiche les noms des contacts
      console.log("Voici la liste de tous vos contacts :");
      listeContact.forEach (contact => {
        contact.decrire();
      });
      i = 1; // continue la boucle
      break;
    case 2 :
      // ajoute un nom
      const nom = String(prompt("Entrez le nom du nouveau contact :"));
      const prenom = String(prompt("Entrez le prénom du nouveau contact :"));
      const contact = new Contact(nom, prenom);
      console.log("Le nouveau contact a bien été ajouté");
      listeContact.push(contact);  // ajout dans le tableau des contacts
      i = 1;  // continue la boucle
      break;
    case 0 :
      console.log("Au revoir !");
      i = 0;  // sort de la boucle
      break;
  } 
       } 