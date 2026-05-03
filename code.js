//Animatrix





//Eyes

document.querySelector("#greenl2").addEventListener("click", wats);
function wats() {
    const url = "https://wa.me/59898481889?text=" + encodeURIComponent("Hola Diego! Quisiera contactarte para contratar tus servicios.");

  window.open(url);

} 
const w = new Audio("sounds/ElevenLabs.ogg");
document.querySelector("#greenl2").addEventListener("mouseover", playAudioW);
document.querySelector("#redl2").addEventListener("mouseover", playAudioW);
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

btn.addEventListener("mouseleave", () => {
  yaSono = false;
});


//btn SPAN

document.querySelector("#btnS1").addEventListener("click", expandir);

function expandir() {
   
  const extra = document.querySelector("#span1");
  const btn1 = document.querySelector("#btnS1");

  

  if (extra.classList.contains("ocultar1")) {
    btn1.value = "Contraer ▲";
    extra.classList.remove("ocultar1");
    
  } else {
    btn1.value = "Expandir ▼";
    
    extra.classList.add("ocultar1");
  }
}
