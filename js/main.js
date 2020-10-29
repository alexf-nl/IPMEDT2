const audio = new Audio('sound/haarknippen.mp3');
const eersteMetinghaar = document.getElementById("js--button--eersteMeting");
const eersteMetinghaarResultaat = document.getElementsByClassName("section--container--tekstKapper-header--content")[0];
const naarKapperKnop = document.getElementById('js--button--naarKapper');
const tekstKnop = document.getElementsByClassName("button--yellow")[0].innerHTML;
const schaarEmoji = document.getElementById('js--scissors');
const progressBar = document.getElementById('js--progressbar');
let progressBarValue = 0;
const progressBarIncrease = 5;
progressBar.setAttribute('value', progressBarValue);
schaarEmoji.style.setProperty('--move', progressBarValue + '%');

function progressBarFunctie() {
  progressBarValue += progressBarIncrease;
  progressBar.setAttribute('value', progressBarValue);
  schaarEmoji.style.setProperty('--move', progressBarValue + '%');
}

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

naarKapperKnop.onclick = (event) => {
  document.getElementsByClassName('section--container--tekstKapper')[0].style.display = 'grid';
  document.getElementsByClassName('section--container--imageKapper')[0].style.display = 'grid';
  document.getElementsByClassName('main--text')[0].style.display = 'none';
  document.getElementsByClassName('main--button')[0].style.display = 'none';
  progressBarFunctie();





}

eersteMetinghaar.onclick = (event) =>  {
  eersteMetinghaarResultaat.style.display = "block";
}

/*document.getElementsByClassName("image container__items__list__item__scissors--image")[0].style.height = "65rem";*/


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
    document.getElementsByClassName("image container__items__list__item__scissors--image")[0].style.height = "30rem";
  }
}

eersteMetinghaar.onclick = (event) =>  {
  eersteMetinghaarResultaat.style.display = "block";
  progressBarFunctie();
}
