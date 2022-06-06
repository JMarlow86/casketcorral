
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

const dateObjectInput = document.querySelector<HTMLInputElement>('#date-object');
const dateObjectValue = document.querySelector('#date-object-value');

    
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
