const eersteMetinghaarResultaat = document.getElementsByClassName("section--container--tekstKapper-header--content")[0];
const eersteMetinghaar = document.getElementById("js--button--eersteMeting");
const liniaal = document.getElementById("js--liniaal");
const lengte = document.getElementById("js--lengte");
const buttonMeten = document.getElementById("js--button--meten");
const laatsteHaarMeten = document.getElementById("js--laatste--haar--meten");
const progressBar = document.getElementById('js--progressbar');
let progressBarValue = 0;
const progressBarIncrease = 5;
const progressBarPercentage = document.getElementById('js--progressPercentage');
const buttonDeurOpen = document.getElementById('js--button--deur--open');
const imageJongen = document.getElementsByClassName('image--jongen');
const buttonAntwoordJongen = document.getElementById('js--button--antwoord--jongen');
const tekstJongen = document.getElementById('js--tekst--jongen');
const dialoogJongen = document.getElementById('js--dialoog--jongen');

function progressBarFunctie(progressBarValue) {
  progressBar.setAttribute('value', progressBarValue);
  document.getElementById('js--scissors1').style.setProperty('--move', progressBarValue + '%');
  console.log(progressBarValue);
  progressBarPercentage.innerHTML = progressBarValue + "%";
  progressBarPercentage.style.setProperty('--move', progressBarValue + "%");
}


if(location.pathname == "/derde_scene.html") {
  progressBarFunctie(35);
  eersteMetinghaar.onclick = (event) =>  {
    eersteMetinghaarResultaat.style.display = "block";
  }

} else if(location.pathname == "/vijfde_scene.html") {
  progressBarFunctie(70);

  buttonMeten.onclick = (event) => {
  liniaal.style.height = "100%";
  lengte.style.display = "block";
   laatsteHaarMeten.innerHTML = "<p>Je haar is nu lang genoeg! Wil je nu naar de kapper gaan en je haar laten knippen om het te doneren?</p>";
   laatsteHaarMeten.style.backgroundColor = "var(--text-background-color)";
  }

} else if(location.pathname == "/zevende_scene.html") {
  buttonDeurOpen.onclick = (event) => {
    imageJongen.style.display = "block";
    buttonAntwoordJongen.style.display = "block";
    tekstJongen.style.display = "block";
    dialoogJongen.style.display = "none";
    buttonDeurOpen.style.display = "none";
  }
}
