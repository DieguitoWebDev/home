const x1 = new Audio("sounds/Generation_2.ogg");

const servizi = document.querySelector("#servicii");
const missServ = document.querySelector("#missServ");
const servicios2 = document.querySelector("#servicios2");
const serv2 = document.querySelector("#serv2");
const colili = document.querySelector("#colili");

if (servizi) {
  servizi.addEventListener("click", serv);
}

function serv() {

  if (getComputedStyle(servicios2).display === "none") {
    x1.volume = 0.1;

    x1.play();

    missServ.style.display = "block";
    servicios2.style.display = "block";
    serv2.style.display = "block";
    colili.style.display = "grid";

    document.getElementById("btnDiv1").scrollIntoView({
      behavior: "smooth"
    });

    if (document.querySelector("#foto").src.includes("port2.png")) {

      document.querySelector("#foto").src = "images/port1.png";

      document.querySelector("#portfoli").classList.remove("open");
      document.querySelector("#portfoli").classList.add("portfo");

      document.querySelector("#portTit").style.display = "flex";
    }

  } else {

    missServ.style.display = "none";
    servicios2.style.display = "none";
    serv2.style.display = "none";
    colili.style.display = "none";
  }
}

//Eyes

const redl2 = document.querySelector("#redl2");
if (redl2) {
  redl2.addEventListener("click", () => {
    const destinatario = "dgg1323blue@gmail.com";
    const asunto = "Cliente potencial";
    const mensaje = "Hola Diego! Quisiera contactarte para contratar tus servicios.";

    const url = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje)}`;

    window.open(url);
  });
}


const greenl2 = document.querySelector("#greenl2");
if (greenl2) {
  greenl2.addEventListener("click", wats);
  greenl2.addEventListener("mouseover", playAudioW);
}
if (redl2) {
  redl2.addEventListener("mouseover", playAudioW);
}
function wats() {
    const url = "https://wa.me/59898481889?text=" + encodeURIComponent("Hola Diego! Quisiera contactarte para contratar tus servicios.");

  window.open(url);

} 
function playAudioW() {

    let yaSono= false;
 if (!yaSono) {
    w.currentTime = 0;
    w.play();
    yaSono = true;
  }
}
let yaSono = false;
const btn = document.querySelector("#greenl2");

if (btn) {
  btn.addEventListener("mouseleave", () => {
    yaSono = false;
  });
}


//btn SPAN

function toggleExpand(btnId, spanId, tit) {
  const extra = document.querySelector(spanId);
  const btn = document.querySelector(btnId);

  if (extra.classList.contains("ocultar1")) {
    extra.classList.remove("ocultar1");
    btn.value = "Contraer ▲";
  } else {
    extra.classList.add("ocultar1");
    btn.value = "Expandir ▼";
  }
  document.querySelector(tit).scrollIntoView({
  behavior: "smooth"
});
}

const btnS1 = document.querySelector("#btnS1");
if (btnS1) {
  btnS1.addEventListener("click", () => {
    toggleExpand("#btnS1", "#span1", "#titSpa1");
  });
}

const btnS2 = document.querySelector("#btnS2");
if (btnS2) {
  btnS2.addEventListener("click", () => {
    toggleExpand("#btnS2", "#span2", "#titSpa2");
  });
}

const btnS3 = document.querySelector("#btnS3");
if (btnS3) {
  btnS3.addEventListener("click", () => {
    toggleExpand("#btnS3", "#span3", "#titSpa3");
  });
}


window.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("langToggle");

  if (toggle) {
    const page = window.location.pathname.split("/").pop();

    // sincroniza estado visual con la página actual
    if (page === "indexEn.html") {
      toggle.checked = true;
    } else {
      toggle.checked = false;
    }

    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        window.location.href = "indexEn.html";
      } else {
        window.location.href = "index.html";
      }
    });
  }
});


// Portfolio
const pages = new Audio("sounds/pageTurn.mp3");
pages.volume = 0.25;
const portfoli = document.querySelector("#portfoli");
if (portfoli) {
  portfoli.addEventListener("click", portf);
}
function portf() {

  pages.currentTime = 2;
  pages.play();

  const page = window.location.href;

  setTimeout(() => {

    if (page.includes("indexEn.html")) {

      window.location.href = "portfolioEN.html";

    } else {

      window.location.href = "portfolio.html";

    }

  }, 400);

}

let back = document.querySelector("#backp");
let arrow1 = document.querySelector("#arrowp");
const watsFin = document.querySelector(".watsFin");

if (back) {
  back.addEventListener("mouseover", arrowB);
  back.addEventListener("click", backToIni);
  back.addEventListener("mouseleave", arrowR);
}
if (arrow1) {
  arrow1.addEventListener("click", backToIni);
}
if (watsFin) {
  watsFin.addEventListener("click", wats);
}
function backToIni(){
  const page = window.location.href;
  if (page.includes("portfolioEN.html")) {
    window.location.href = "indexEn.html";
  } else {
    window.location.href = "index.html";
  }
}
function arrowB(){
  if (arrow1) arrow1.src = "images/arrowRed.png";
  if (back) back.style.color = "red";

}
function arrowR(){

    if (arrow1) arrow1.src = "images/arrowBlack.png";
    if (back) back.style.color = "black";

}
function arrowR(){

    if (arrow1) arrow1.src = "images/arrowBlack.png";
    if (back) back.style.color = "black";

}

if (watsFin) {
  watsFin.addEventListener("click", wats);
}
