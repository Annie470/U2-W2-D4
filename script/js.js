// ALERT CONTA VIAGGI
const viaggi = document.querySelectorAll("#miaSezione2 .col");
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert(`Viaggi disponibili: ${viaggi.length}`, "success");
  });
}

// AGGIUNTA PILLS HOT
const cardViaggi = document.querySelectorAll("#miaSezione2 .card");
cardViaggi.forEach((element) => {
  const pill = document.createElement("span");
  pill.innerText = "HOT";
  element.classList.add("position-relative");
  pill.classList.add(
    "position-absolute",
    "top-0",
    "start-100",
    "translate-middle",
    "badge",
    "rounded-pill",
    "bg-danger",
    "z-3"
  );
  element.appendChild(pill);
});

// FUNZIONE SPAZZINO
const btndel = document.getElementById("btndel");
btndel.addEventListener("click", () => {
  const section = document.querySelectorAll("section");
  section.forEach((element) => {
    element.classList.toggle("d-none");
  });
});

//esercizi
// APPLICA BORDER-6 A TUTTE LE CARD DI SALDI
const cardSaldi = document.querySelectorAll("#miaSezione .card");
cardSaldi.forEach((element) => {
  element.classList.add("border-6");
  element.classList.add("border-info");
});

//COLORE EPICODE
const h2Hero = document.querySelector("#hero h2");
h2Hero.classList.add("text-epicode1");

//COLORE NASCONDI SEZIONE
const btnH = document.querySelectorAll(".container h4 + button");
btnH.forEach((element) => {
  element.classList.remove("text-info");
  element.classList.add("text-epicode2");
});
