let body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "#f9fafb";
body.style.fontFamily = "'Open Sans', sans-serif";
body.style.margin = "0px";

let form = document.createElement("form");
document.body.appendChild(form);
form.style.width = "400px";
form.style.height = "553px";
form.style.margin = "150px auto";
form.style.padding = "30px 40px";
form.style.boxSizing = "border-box";
form.style.borderRadius = "5px";
form.style.boxShadow = "0 2px 10px rgb(0 0 0 /30%)"

let heading = document.createElement("h2");
form.appendChild(heading);
heading.innerHTML = "Register With Us";
heading.style.margin = "0 0 20px";
heading.style.textAlign = "center";

/********username*********/
let nameSection = document.createElement("div");
form.appendChild(nameSection);
nameSection.style.marginBottom = "10px";
nameSection.style.paddingBottom = "20px";
nameSection.style.position = "relative";

let labelName = document.createElement("label");
nameSection.appendChild(labelName);
labelName.innerHTML = "Username";
labelName.style.color = "#777";
labelName.style.marginBottom = "5px";
labelName.style.display = "block";

let inputName = document.createElement("input");
nameSection.appendChild(inputName);
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Enter username");
inputName.style.border = "2px solid #f0f0f0";
inputName.style.borderRadius = "4px";
inputName.style.width = "100%";
inputName.style.padding = "10px";
inputName.style.fontSize = "14px";
inputName.style.boxSizing = "border-box";
inputName.addEventListener("focus", function(event) {
    event.target.style.outline = "none";
    event.target.style.border = "2px solid gray";
});
inputName.addEventListener("focusout", function(event) {
    event.target.style.borderColor = "#f0f0f0";
});

let errorName = document.createElement("small");
nameSection.appendChild(errorName);
errorName.innerHTML = "Username must be at least 3 characters";
errorName.style.color = "#e74c3c";
errorName.style.position = "absolute";
errorName.style.bottom = "0";
errorName.style.left = "0";
errorName.style.display = "none";

/********email*********/
let emailSection = document.createElement("div");
form.appendChild(emailSection);
emailSection.style.marginBottom = "10px";
emailSection.style.paddingBottom = "20px";
emailSection.style.position = "relative";

let labelEmail = document.createElement("label");
emailSection.appendChild(labelEmail);
labelEmail.innerHTML = "Email";
labelEmail.style.color = "#777";
labelEmail.style.marginBottom = "5px";
labelEmail.style.display = "block";

let inputEmail = document.createElement("input");
emailSection.appendChild(inputEmail);
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("placeholder", "Enter email");
inputEmail.style.border = "2px solid #f0f0f0";
inputEmail.style.borderRadius = "4px";
inputEmail.style.width = "100%";
inputEmail.style.padding = "10px";
inputEmail.style.fontSize = "14px";
inputEmail.style.boxSizing = "border-box";
inputEmail.addEventListener("focus", function(event) {
    event.target.style.outline = "none";
    event.target.style.border = "2px solid gray";
});
inputEmail.addEventListener("focusout", function(event) {
    event.target.style.borderColor = "#f0f0f0";
});

let errorEmail = document.createElement("small");
emailSection.appendChild(errorEmail);
errorEmail.innerHTML = "Email is not valid";
errorEmail.style.color = "#e74c3c";
errorEmail.style.position = "absolute";
errorEmail.style.bottom = "0";
errorEmail.style.left = "0";
errorEmail.style.display = "none";

/********password*********/
let passwordSection = document.createElement("div");
form.appendChild(passwordSection);
passwordSection.style.marginBottom = "10px";
passwordSection.style.paddingBottom = "20px";
passwordSection.style.position = "relative";

let labelPassword = document.createElement("label");
passwordSection.appendChild(labelPassword);
labelPassword.innerHTML = "Password";
labelPassword.style.color = "#777";
labelPassword.style.marginBottom = "5px";
labelPassword.style.display = "block";

let inputPassword = document.createElement("input");
passwordSection.appendChild(inputPassword);
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Enter password");
inputPassword.style.border = "2px solid #f0f0f0";
inputPassword.style.borderRadius = "4px";
inputPassword.style.width = "100%";
inputPassword.style.padding = "10px";
inputPassword.style.fontSize = "14px";
inputPassword.style.boxSizing = "border-box";
inputPassword.addEventListener("focus", function(event) {
    event.target.style.outline = "none";
    event.target.style.border = "2px solid gray";
});
inputPassword.addEventListener("focusout", function(event) {
    event.target.style.borderColor = "#f0f0f0";
});

let errorPassword = document.createElement("small");
passwordSection.appendChild(errorPassword);
errorPassword.innerHTML = "Password must be at least 6 characters";
errorPassword.style.color = "#e74c3c";
errorPassword.style.position = "absolute";
errorPassword.style.bottom = "0";
errorPassword.style.left = "0";
errorPassword.style.display = "none";

/********confirm password*********/
let confirmSection = document.createElement("div");
form.appendChild(confirmSection);
confirmSection.style.marginBottom = "10px";
confirmSection.style.paddingBottom = "20px";
confirmSection.style.position = "relative";

let labelConfirm = document.createElement("label");
confirmSection.appendChild(labelConfirm);
labelConfirm.innerHTML = "Confirm Password";
labelConfirm.style.color = "#777";
labelConfirm.style.marginBottom = "5px";
labelConfirm.style.display = "block";

let inputConfirm = document.createElement("input");
confirmSection.appendChild(inputConfirm);
inputConfirm.setAttribute("type", "password");
inputConfirm.setAttribute("placeholder", "Enter password again");
inputConfirm.style.border = "2px solid #f0f0f0";
inputConfirm.style.borderRadius = "4px";
inputConfirm.style.width = "100%";
inputConfirm.style.padding = "10px";
inputConfirm.style.fontSize = "14px";
inputConfirm.style.boxSizing = "border-box";
inputConfirm.addEventListener("focus", function(event) {
    event.target.style.outline = "none";
    event.target.style.border = "2px solid gray";
});
inputConfirm.addEventListener("focusout", function(event) {
    event.target.style.borderColor = "#f0f0f0";
});

let errorConfirm = document.createElement("small");
confirmSection.appendChild(errorConfirm);
errorConfirm.innerHTML = "Password2 is required";
errorConfirm.style.color = "#e74c3c";
errorConfirm.style.position = "absolute";
errorConfirm.style.bottom = "0";
errorConfirm.style.left = "0";
errorConfirm.style.display = "none";

/********submit button*********/
let button = document.createElement("button");
form.appendChild(button);
button.innerHTML = "Submit";
button.style.cursor = "pointer";
button.style.backgroundColor = "#3498db";
button.style.border = "2px solid #3498db";
button.style.borderRadius = "4px";
button.style.color = "#fff";
button.style.display = "block";
button.style.fontSize = "16px";
button.style.padding = "10px";
button.style.marginTop = "20px";
button.style.width = "100%";
button.style.boxSizing = "border-box";
button.setAttribute("type", "submit");
button.addEventListener("click", function(event) {
    if (inputName.value.length < 3) {
        errorName.style.display = "block";
        inputName.style.borderColor = "#E74C3C";
    }
    else {
        errorName.style.display = "none";
        inputName.style.borderColor = "#4CCC71";
    }

    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputEmail.value == "" || !inputEmail.value.match(emailFormat)) {
        errorEmail.style.display = "block";
        inputEmail.style.borderColor = "#E74C3C";
    }
    else {
        errorEmail.style.display = "none";
        inputEmail.style.borderColor = "#4CCC71";
    }

    if(inputPassword.value.length < 6) {
        errorPassword.style.display = "block";
        inputPassword.style.borderColor = "#E74C3C";
    }
    else {
        errorPassword.style.display = "none";
        inputPassword.style.borderColor = "#4CCC71";
    }

    if(inputConfirm.value == "") {
        errorConfirm.style.display = "block";
        inputConfirm.style.borderColor = "#E74C3C";
    }
    else if (inputConfirm.value != inputPassword.value) {
        errorConfirm.innerHTML = "Passwords do not match";
        errorConfirm.style.display = "block";
        inputConfirm.style.borderColor = "#E74C3C";
    }
    else {
        errorConfirm.style.display = "none";
        inputConfirm.style.borderColor = "#4CCC71";
    }
});
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);