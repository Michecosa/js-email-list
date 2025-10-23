/* 
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const url = 'https://flynn.boolean.careers/exercises/api/random/mail';
const emails = [];

function getMails(n) {
  for (let i = 0; i<n; i++) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        emails.push(data.response)
      })
      .catch(error => console.error("Errore: ", error))
  }
}

getMails(10);
console.log(emails);