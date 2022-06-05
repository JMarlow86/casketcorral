
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

const dateObjectInput = document.querySelector<HTMLInputElement>('#date-object');
const dateObjectValue = document.querySelector('#date-object-value');

dateObjectValue.textContent = dateStringInput.valueAsDate.toString();

dateObjectInput.addEventListener('input', () => {
  dateObjectValue.textContent = dateObjectInput.valueAsDate.toString();
});


    