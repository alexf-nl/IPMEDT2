const audio = new Audio('sound/haarknippen.mp3');
const naarEersteScene = document.getElementById('js--button--eersteScene');
const haarGekniptAudio = new Audio('sound/haargeknipt.mp3');
const eersteMetinghaar = document.getElementById("js--button--eersteMeting");
const tweedeMetinghaar = document.getElementById("js--button--eersteMeting1");
const derdeMetinghaar = document.getElementById("js--button--eersteMeting2");

const eersteMetinghaarResultaat = document.getElementsByClassName("vervangen__tekst")[0];
const naarKapperKnop = document.getElementById('js--button--naarKapper');
const tekstKnop = document.getElementsByClassName("button--pink")[0].innerHTML;
const schaarEmoji = document.getElementById('js--scissors');
const progressBar = document.getElementById('js--progressbar');
let progressBarValue = 0;
const progressBarIncrease = 5;
const progressBarPercentage = document.getElementById('js--progressPercentage');
const haarDonerenText = document.getElementById('js--haarDonerenText');
const haarKnippenScene = document.getElementById('js--button--haarKnippenScene');
const liniaal = document.getElementById('js--liniaal');
const buttonLiniaal = document.getElementById('js--button--liniaal');
let imgSize = 70;
zelfstandigKapper = document.getElementById('zelfKapper');
haarKnippenButton = document.getElementById('js--button-haarKnippen');
const textTerminal = document.getElementById("js--terminal--text");
const geluidUit = document.getElementById('js--geluid--uit');
const geluidAan = document.getElementById('js--geluid--aan');
let geluidAanzetten = true;
const gesprekEmma = document.getElementById('js--button--gesprekEmma');
const gesprekMetEmma = document.getElementById('js--button--gesprekMetEmma');
const laatsteDeel = document.getElementById('js--laatsteDeel');


function geluidInstellen() {
  geluidAan.onclick = (event) => {
      geluidAanzetten = false;
      geluidUit.style.display = 'block';
      geluidAan.style.display = 'none';
  }

  geluidUit.onclick = (event) => {
    geluidAanzetten = true;
    geluidUit.style.display = 'none';
    geluidAan.style.display = 'block';


  }
}

if(naarEersteScene) {
naarEersteScene.onclick = (event) => {
  window.location.href = "eerste_scene.html";

  }
}



if(location.pathname == "/eerste_scene.html" || location.pathname == "/public/eerste_scene.html") {
  progressBarFunctie(10);
  eersteMetinghaar.innerHTML = "Je haar nu doneren!";

}
else if(location.pathname == "/tweede_scene.html" || location.pathname == "/public/tweede_scene.html") {
  progressBarFunctie(20);
  tweedeMetinghaar.onclick = (event) => {
    window.location.href = "derde-scene.html";
  }
  if(gesprekEmma) {
    gesprekEmma.onclick = (event) => {
      window.location.href = "tweede_scene_keuze.html";
    }
  }

} else if(location.pathname == "/tweede_scene_keuze.html" || location.pathname == "/public/tweede_scene_keuze.html") {
  progressBarFunctie(30);
  tweedeMetinghaar.onclick = (event) => {
    window.location.href = "derde-scene.html";
  }

} else if(location.pathname == "/derde-scene.html" || location.pathname == "/public/derde-scene.html") {
  progressBarFunctie(35);
}
else if(location.pathname == "/vierde_scene.html" || location.pathname == "/public/vierde_scene.html") {
  progressBarFunctie(50);
  derdeMetinghaar.onclick = (event) => {
    window.location.href = "vijfde_scene.html";
  }
}
else if(location.pathname == "/vijfde_scene.html" || location.pathname == "/public/vijfde_scene.html") {
  progressBarFunctie(70);
} else if(location.pathname == "/zesde_scene_keuze.html" || location.pathname == "/public/zesde_scene_keuze.html") {
  progressBarFunctie(92);
    laatsteDeel.onclick = (event) => {
      window.location.href = "zevende_scene.html";
    }
} else if(location.pathname == "/zevende_scene.html" || location.pathname == "/public/zevende_scene.html") {
  progressBarFunctie(95);
}





if(location.pathname == "/zesde_scene.html" || location.pathname == "/public/zesde_scene.html") {
  progressBarFunctie(76);
  progressBarValue = 76;
  geluidUit.style.display = 'none';

  geluidInstellen();

  gesprekMetEmma.style.display = "none";
  document.getElementsByClassName('container__tekst')[0].style.display = 'grid';
  document.getElementsByClassName('container__image')[0].style.display = 'grid';
  document.getElementsByClassName('container__haarGeknipt')[0].style.display = "none";
  document.getElementsByClassName('container__hair')[0].style.display = 'none';
  document.getElementsByClassName('container__haarKnippen')[0].style.display = 'none';
  haarKnippenScene.onclick = (event) => {
    haarKnippenScene.style.display = 'none';

            document.getElementById('js--HaarKnippen').style.display = "grid";
            document.getElementsByClassName('container__tekst')[0].style.display = 'none';
            document.getElementsByClassName('container__image')[0].style.display = 'none';
            document.getElementsByClassName(' container__hair')[0].style.display = 'grid';

      if(window.screen.width < 799 ) {
        zelfstandigKapper.innerHTML = "Je bent nu zelf de kapper, Klik op de button onderaan om Ahmad zijn haar te knippen";
        document.getElementsByClassName('schaar__item')[1].style.display = 'grid';
        console.log('ja');
        document.getElementsByClassName('schaar__item')[0].style.display = 'none';
        haarKnippenButton.onclick = (event) => {
          haarKnippenScene.classList.remove("button--pink");
          haarKnippenScene.innerHTML = "Doorgaan";
          haarKnippenScene.style.display = "block";
          gesprekMetEmma.style.display = "block";
          haarKnippenScene.onclick = (event) => {
            window.location.href = "zevende_scene.html";
          }
          gesprekMetEmma.onclick = (event) => {
            window.location.href = "zesde_scene_keuze.html";
          }

          if(geluidAanzetten == true) {
            haarGekniptAudio.play();
        }
          document.getElementById('js--HaarKnippen').style.display = "none";
          document.getElementsByClassName('container__hair')[0].style.display = "none";
          document.getElementsByClassName('container__tekst')[0].style.display = 'grid';
          document.getElementsByClassName('container__tekst__header')[0].innerHTML = "Bedankt voor je hulp met het knippen!";
          haarDonerenText.style.display = "grid";
          haarDonerenText.innerHTML = "<p>Je hebt het haar van Ahmad succesvol geknipt. Ahmad is blij met zijn nieuwe kapsel, en ook dat die iets goeds heeft gedaan voor het meisje Emma. Emma vindt het haar heel mooi staan en zou graag in gesprek met Ahmad willen gaan.</p>";
          document.getElementsByClassName('container__image')[0].style.display = 'grid';
          geluidUit.style.display = 'none';
          geluidAan.style.display = 'none';
        }
      }
      else if(window.screen.width > 800){
        document.getElementsByClassName('schaar__item')[0].style.display = 'grid';
        document.getElementsByClassName('schaar__item')[1].style.display = 'none';

      }
    }

}





textButton = (text) => {
    document.getElementsByClassName("button--pink")[0].setAttribute('data-value' , text);
}

textButton(tekstKnop);


if(textTerminal) {
  let text = textTerminal.innerHTML;
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
}

//voor progressBar
function progressBarFunctie(progressBarValue) {
  progressBar.setAttribute('value', progressBarValue);
  document.getElementById('js--scissors1').style.setProperty('--move', progressBarValue + '%');
  console.log(schaarEmoji);
  console.log(progressBarValue);
  progressBarPercentage.innerHTML = progressBarValue + "%";
  progressBarPercentage.style.setProperty('margin-left', progressBarValue - 3 + "%");
}


if(naarKapperKnop) {
  naarKapperKnop.onclick = (event) => {
    document.getElementsByClassName('section--container--tekstKapper')[0].style.display = 'grid';
    document.getElementsByClassName('section--container--imageKapper')[0].style.display = 'grid';
    document.getElementsByClassName('main--text')[0].style.display = 'none';
    document.getElementsByClassName('main--button')[0].style.display = 'none';
    progressBarFunctie(12);

  }
}



if(eersteMetinghaar) {
    eersteMetinghaar.onclick = (event) =>  {
    haarDonerenText.innerHTML = "<p><b>Helaas is je haarlengte nog niet lang genoeg. Op dit moment is je haarlengte 26cm en je hebt minimaal 30cm nodig om het haar te kunnen doneren. Probeer het paar manden opnieuw!<b></p>";
    eersteMetinghaar.innerHTML = "Doorgaan";
    progressBarFunctie(15);
    eersteMetinghaar.onclick = (event) => {
      window.location.href = "tweede_scene.html";
    }
}
}



function onDragStart(event) {
  event.target.style.backgroundColor = "transparent";
  event.dataTransfer.setData("text/plain", event.target.id);
  if(geluidAanzetten == true) {
    audio.play();
  } else {
    audio.pause();
  }


}

function onDragEnd(event) {
  if(geluidAanzetten == true) {
    audio.pause();
    audio.currentTime = 0;
}

}

function onDragOver(event) {
  event.preventDefault();
  event.stopPropagation();

}

function onDragLeave(event) {
  if(document.getElementsByClassName("container__charachter")[0]) {
  document.getElementsByClassName("container__charachter")[0].style.backgroundColor = "#252a34";
}


}

function onDrop(event) {

  document.getElementById(event.dataTransfer.getData("text/plain")).style.display="#252a34";
  let id = event.dataTransfer.getData("text/plain");
  if(id === "js--scissors") {
    progressBarFunctie(progressBarValue+=2);
    imgSize -= 10;
   document.getElementsByClassName("container__hair__character__image")[0].style.opacity = "0." + imgSize;
    if(imgSize == 0) {
      zelfstandigKapper.style.display = "none";
      document.getElementsByClassName('container__haarKnippen__list__item')[0].style.display = 'none';
      if(geluidAanzetten == true) {
        haarGekniptAudio.play();
      } else {
        haarGekniptAudio.pause();
      }
      haarKnippenScene.classList.remove("button--pink");
      console.log('ja');
      haarKnippenScene.classList.add("button--links");
      haarKnippenScene.innerHTML = "Doorgaan";
      haarKnippenScene.style.display = "block";
      haarKnippenScene.onclick = (event) => {
        window.location.href = "zevende_scene.html";
      }
      gesprekMetEmma.style.display = "block";

      gesprekMetEmma.onclick = (event) => {
        window.location.href = "zesde_scene_keuze.html";
      }
      document.getElementsByClassName('container__hair')[0].style.display = "none";
      document.getElementsByClassName('container__tekst')[0].style.display = 'grid';
      document.getElementsByClassName('container__tekst__header')[0].innerHTML = "Bedankt voor je hulp met het knippen!";
      haarDonerenText.style.display = "grid";
      haarDonerenText.innerHTML = "<p>Je hebt het haar van Ahmad succesvol geknipt. Ahmad is blij met zijn nieuwe kapsel, en ook dat die iets goeds heeft gedaan voor de Nederlanders. Het haar van Ahmad wordt nu gedonneerd aan Emma!</p>";
      document.getElementsByClassName('container__image')[0].style.display = 'grid';
      geluidUit.style.display = 'none';
      geluidAan.style.display = 'none';
    }
  }
}
