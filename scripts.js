const first_name = document.querySelector("#first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone_number");
const pass_confirm = document.getElementById("pass_confirm");
const submit = document.querySelector("#account_create");
const inputs = document.querySelectorAll("input");

const error_messages = document.querySelectorAll(".error-mess");

error_messages.forEach(element => {
    element.setAttribute("style", "visibility: hidden");
});

document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);

submit.addEventListener("click", () => {
    
    inputs.forEach(element => {
        element.setAttribute("required", "");
    });

    if(pass_confirm.value != password.value) {
        pass_confirm.setCustomValidity("Invalid");
        //pass_confirm.setAttribute("style", "visibility: visible");
    }
    else {
        pass_confirm.setCustomValidity("");
    }

    validate();

});

function validate() {
    inputs.forEach(element => {
        if(!element.checkValidity()) {
            element.nextElementSibling.setAttribute("style", "visibility: visible");
        }
        else {
            element.nextElementSibling.setAttribute("style", "visibility: hidden");
        }
    });
}