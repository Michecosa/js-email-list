/* 
Abbellire con CSS o Bootstrap,
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
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

        const elem = document.createElement('div');
        elem.textContent = email;
        mailContainer.appendChild(elem);
      })
      .catch(error => console.error("Errore: ", error))
  }
}

getMails(10);
console.log(emails);