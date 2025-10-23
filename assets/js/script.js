/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const url = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emails = [];
const mailContainer = document.getElementById('mails');

function getMails(n) {
  for (let i = 0; i<n; i++) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const email = data.response;
        emails.push(email);
      })
      .catch(error => console.error("Errore: ", error))
  }
}

getMails(10);
console.log(emails);