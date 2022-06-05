
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

// function displayMessage() {
//   var success = document.getElementById("btnSubmit");

  
// }

// Add a click event listener to the element.
// Assign the event object to a variable in the function.
// Set the event. target. style. color property to the specific text color.


    document.getElementById(btnSubmit).addEventListener("click", function () {alert(success); });