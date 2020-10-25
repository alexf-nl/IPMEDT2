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
