const eersteMetinghaarResultaat = document.getElementsByClassName("section--container--tekstKapper-header--content")[0];
const eersteMetinghaar = document.getElementById("js--button--eersteMeting");

  eersteMetinghaar.onclick = (event) =>  {
    eersteMetinghaarResultaat.style.display = "block";
  }
  