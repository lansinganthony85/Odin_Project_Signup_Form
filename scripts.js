const password = document.getElementById("password");
const pass_confirm = document.getElementById("pass_confirm");
const submit = document.querySelector("#account_create");
const inputs = document.querySelectorAll("input");
const error_messages = document.querySelectorAll(".error-mess");

error_messages.forEach(element => {
    element.setAttribute("style", "visibility: hidden");
});

document.addEventListener('invalid', (e) => {
    
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
}, true);

submit.addEventListener("click", () => {
    
    inputs.forEach(element => {
        element.setAttribute("required", "");
    });

    if(pass_confirm.value != password.value) {
        pass_confirm.setCustomValidity("Invalid");
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