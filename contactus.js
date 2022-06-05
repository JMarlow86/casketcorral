

let person = [];


function takeInformation(){
    if (person.length > 0){
        person = [];
    }
    const formName = document.getElementById("name_input").value;
    const formEmail = document.getElementById("email_input").value;
    const formTelephone = document.getElementById("telephone_input").value;
    const formSubject = document.getElementById("subject_input").value;
    const formMessage = document.getElementById("message_input").value;

    person.push(formName);
    person.push(formEmail);
    person.push(formTelephone);
    person.push(formSubject);
    person.push(formMessage);
}
 
function showInfo(){
    for (i =0; i < person.length; i++){
        let infoLine = document.createElement("div");
        infoLine.setAttribute("class","infoText");
        infoLine.innerHTML=`
            <div>${person[i]}</div>
        `;
        document.getElementById("infoContainer").appendChild(infoLine);

    }
}

function buttonClick() {
    takeInformation();
    showInfo();

}

document.getElementById("contact_form").onsubmit=(event)=>{
    event.preventDefault();
    buttonClick();
}

