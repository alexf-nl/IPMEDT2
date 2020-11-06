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
const imageJongen = document.getElementById('js--image--jongen');
const tekstJongen = document.getElementById('js--tekst--jongen');
const dialoogJongen = document.getElementById('js--dialoog--jongen');
console.log('ja');
function progressBarFunctie(progressBarValue) {
  progressBar.setAttribute('value', progressBarValue);
  document.getElementById('js--scissors1').style.setProperty('--move', progressBarValue + '%');
  console.log(progressBarValue);
  progressBarPercentage.innerHTML = progressBarValue + "%";
  progressBarPercentage.style.setProperty('--move', progressBarValue + "%");
}

if(eersteMetinghaar) {
  eersteMetinghaar.onclick = (event) =>  {
    eersteMetinghaar.onclick = (event) => {
      window.location.href = "vierde_scene.html";
    }
    eersteMetinghaarResultaat.style.display = "block";
  }
}

if(buttonMeten) {
  buttonMeten.onclick = (event) => {
    buttonMeten.onclick = (event) => {
      window.location.href = "zesde_scene.html";
    }
  liniaal.style.height = "100%";
  lengte.style.display = "block";
   laatsteHaarMeten.innerHTML = "<p>Je haar is nu lang genoeg! Wil je nu naar de kapper gaan en je haar laten knippen om het te doneren?</p>";
   laatsteHaarMeten.style.backgroundColor = "var(--text-background-color)";
  }
}

if(buttonDeurOpen) {
  buttonDeurOpen.onclick = (event) => {
    imageJongen.style.display = "block";
    tekstJongen.style.display = "block";
    dialoogJongen.style.display = "none";
    buttonDeurOpen.style.display = "none";
  }

}
