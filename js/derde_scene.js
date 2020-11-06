const eersteMetinghaarResultaat = document.getElementsByClassName("section--container--tekstKapper-header--content")[0];
const eersteMetinghaar = document.getElementById("js--button--eersteMeting");
const liniaal = document.getElementById("js--liniaal");
const lengte = document.getElementById("js--lengte");
const buttonMeten = document.getElementById("js--button--meten");


if(location.pathname == "/derde_scene.html") {

  buttonMeten.onclick = (event) => {
    const laatsteHaarMeten = document.getElementById("js--laatste--haar--meten");

    liniaal.style.height = "100%";
    lengte.style.display = "block";
    laatsteHaarMeten.innerHTML = "<p>Je haar is nu lang genoeg! Wil je nu naar de kapper gaan en je haar laten knippen om het te doneren?</p>";
    laatsteHaarMeten.style.backgroundColor = "var(--text-background-color)";
  }
}




  eersteMetinghaar.onclick = (event) =>  {
    eersteMetinghaarResultaat.style.display = "block";
  }
