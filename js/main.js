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

typeText(Array.from("Dit ben jij Ahmed, 12 jaar oud. Je bent  als een vluchteling naar Nederland gekomen en wilt iets doen voor de Nederlanders als dankbaarheid."));


document.getElementsByClassName("image container__items__list__item__scissors--image")[0].style.height = "65rem";


function onDragStart(event) {
  event.target.style.backgroundColor = "transparent";
  event.dataTransfer.setData("text/plain", event.target.id);

}

function onDragEnd(event) {
  event.target.style.backgroundColor = "#e11d74";

}

function onDragOver(event) {
  event.preventDefault();

}

function onDragLeave(event) {
  document.getElementsByClassName("container__charachter")[0].style.backgroundColor = "#252a34";

}

function onDrop(event) {
  document.getElementById(event.dataTransfer.getData("text/plain")).style.display="#252a34";
  event.target.style.backgroundColor = "#252a34";
  let id = event.dataTransfer.getData("text/plain");
  console.log(id);
  if(id === "js--scissors") {
    document.getElementsByClassName("image container__items__list__item__scissors--image")[0].style.height = "30rem";
  }
}
