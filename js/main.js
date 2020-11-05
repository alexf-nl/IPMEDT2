const audio = new Audio('sound/haarknippen.mp3');
const eersteMetinghaar = document.getElementById("js--button--eersteMeting");
const eersteMetinghaarResultaat = document.getElementsByClassName("section--container--tekstKapper-header--content")[0];
const naarKapperKnop = document.getElementById('js--button--naarKapper');
const tekstKnop = document.getElementsByClassName("button--yellow")[0].innerHTML;
const schaarEmoji = document.getElementById('js--scissors');
const progressBar = document.getElementById('js--progressbar');
let progressBarValue = 0;
const progressBarIncrease = 5;
const progressBarPercentage = document.getElementById('js--progressPercentage');
const haarDonerenText = document.getElementById('js--haarDonerenText');
const haarKnippenScene = document.getElementById('js--button--haarKnippenScene');
const liniaal = document.getElementById('js--liniaal');
const buttonLiniaal = document.getElementById('js--button--liniaal');
let imgSize = 100;

if(location.pathname == "/eerste_scene.html") {
  progressBarFunctie(10);
}
else if(location.pathname == "/tweede_scene.html") {
  progressBarFunctie(20);
} else if(location.pathname == "/derde_scene.html") {
  progressBarFunctie(35);
}
else if(location.pathname == "/vierde_scene.html") {
  progressBarFunctie(50);
  console.log('hey');
}
else if(location.pathname == "/vijfde_scene.html") {
  progressBarFunctie(70);
}else if(location.pathname == "/zesde_scene.html") {
  progressBarFunctie(90);
}else if(location.pathname == "/zevende_scene.html") {
  progressBarFunctie(100);
}

if(location.pathname == "/zesde_scene.html") {

  progressBarFunctie(65);
  console.log('hey123');
  document.getElementsByClassName('section--container--tekstKapper')[0].style.display = 'grid';
  document.getElementsByClassName('section--container--imageKapper')[0].style.display = 'grid';
  document.getElementsByClassName('container--haarGeknipt')[0].style.display = "none";
document.getElementsByClassName(' container__hair')[0].style.display = 'none';
document.getElementsByClassName('container--haarKnippen')[0].style.display = 'none';
    haarKnippenScene.onclick = (event) => {
      document.getElementById('js--HaarKnippen').style.display = "grid";
      document.getElementsByClassName('section--container--tekstKapper')[0].style.display = 'none';
      document.getElementsByClassName('section--container--imageKapper')[0].style.display = 'none';
      document.getElementsByClassName(' container__hair')[0].style.display = 'grid';


    }
}

/*buttonLiniaal.onclick = (event) => {
  document.getElementsByClassName('liniaal')[0].style.height = "30rem";
  console.log("klik");
}*/


console.log(eersteMetinghaar);
console.log(eersteMetinghaarResultaat);

textButton = (text) => {
    document.getElementsByClassName("button--yellow")[0].setAttribute('data-value' , text);
}

textButton(tekstKnop);



let text = document.getElementById("js--terminal--text").innerHTML;
document.getElementById("js--terminal--text").innerHTML = "";
typeText = (textToBeTyped)=>{
  if(textToBeTyped != "") {
    document.getElementById("js--terminal--text").innerHTML += textToBeTyped[0];
    textToBeTyped.splice(0,1);
    setTimeout(() => {
      typeText(textToBeTyped);
    }, 55);
  }

}

typeText(Array.from(text));

//voor progressBar
function progressBarFunctie(progressBarValue) {
  progressBar.setAttribute('value', progressBarValue);
  document.getElementById('js--scissors1').style.setProperty('--move', progressBarValue + '%');
  console.log(schaarEmoji);
  console.log(progressBarValue);
  progressBarPercentage.innerHTML = progressBarValue + "%";
  progressBarPercentage.style.setProperty('--move', progressBarValue + "%");
}



naarKapperKnop.onclick = (event) => {
  document.getElementsByClassName('section--container--tekstKapper')[0].style.display = 'grid';
  document.getElementsByClassName('section--container--imageKapper')[0].style.display = 'grid';
  document.getElementsByClassName('main--text')[0].style.display = 'none';
  document.getElementsByClassName('main--button')[0].style.display = 'none';
  progressBarFunctie(12);

}



eersteMetinghaar.onclick = (event) =>  {
  haarDonerenText.innerHTML = "<p>Helaas is je haarlengte nog niet lang genoeg. Op dit moment is je haarlengte 26cm en je hebt minimaal 30cm nodig om het haar te kunnen doneren. Probeer het paar manden opnieuw!</p>";
  progressBarFunctie(15);

}



function onDragStart(event) {
  event.target.style.backgroundColor = "transparent";
  event.dataTransfer.setData("text/plain", event.target.id);
  audio.play();


}

function onDragEnd(event) {
  audio.pause();
  audio.currentTime = 0;

}

function onDragOver(event) {
  event.preventDefault();

}

function onDragLeave(event) {
  document.getElementsByClassName("container__charachter")[0].style.backgroundColor = "#252a34";



}

function onDrop(event) {
  document.getElementById(event.dataTransfer.getData("text/plain")).style.display="#252a34";
  let id = event.dataTransfer.getData("text/plain");
  console.log(id);
  if(id === "js--scissors") {
    imgSize -= 20;
    document.getElementsByClassName("container__items__list__item__scissors--image")[0].style.height = imgSize + "rem";
    console.log(imgSize);
    if(imgSize == 0) {
      document.getElementById('js--HaarKnippen').style.display = "none";
      document.getElementsByClassName('container__hair')[0].style.display = "none";
      document.getElementsByClassName('section--container--tekstKapper')[0].style.display = 'grid';
      document.getElementsByClassName('section--container--tekstKapper--header')[0].innerHTML = "Bedankt voor je hulp met het knippen!";
      haarDonerenText.style.display = "grid";
      haarDonerenText.innerHTML = "<p>Je hebt het haar van Ahmad succesvol geknipt. Ahmad is blij met zijn nieuwe kapsel, en ook dat die iets goeds heeft gedaan voor de Nederlanders. Het haar van Ahmad wordt nu gedonneerd aan de persoon die het hard nodig heeft!</p>";
      document.getElementsByClassName('section--container--imageKapper')[0].style.display = 'grid';
    }
  }
}
