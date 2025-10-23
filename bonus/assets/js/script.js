const url = "https://flynn.boolean.careers/exercises/api/random/mail";
const emails = [];
const mailContainer = document.getElementById("mails");
const refresh = document.getElementById("refresh");

function getMails(n) {
  emails.length = 0;
  mailContainer.innerHTML = `
    <div class="spinner-container text-center my-5">
      <div class="spinner-border text-light" style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Caricamento...</span>
      </div>
    </div>
  `;

  for (let i = 0; i < n; i++) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        emails.push(data.response);

        if (emails.length === n) {
          mailContainer.innerHTML = "";
          emails.forEach((email) => {
            const elem = document.createElement("div");
            elem.classList.add("col-sm-6", "mb-3");
            elem.innerHTML = `
              <div class="card rounded-5 h-100 mx-3">
                <div class="card-body text-center">
                  <h5 class="card-title mb-0">${email}</h5>
                </div>
              </div>
            `;
            mailContainer.appendChild(elem);
          });
        }
      })
      .catch((error) => console.error("Errore: ", error));
  }
}

getMails(10);
refresh.addEventListener("click", () => getMails(10));
