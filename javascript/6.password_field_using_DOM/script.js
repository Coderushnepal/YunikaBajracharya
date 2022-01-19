document.body.style.backgroundColor = "rgb(61, 61, 61)";

// create form
var form = document.createElement("form");
form.style.width = "350px";
form.style.margin = "90px auto";
form.style.padding = "40px";
form.style.backgroundColor = "white";
form.style.borderRadius = "5px";
document.body.appendChild(form);

// create password field
var password = document.createElement("input");
password.setAttribute("placeholder", "तपाईको पासवर्ड प्रविष्ट गर्नुहोस्");
password.setAttribute("type", "password");
password.setAttribute("required", "");
form.appendChild(password);
password.style.padding = "15px";
password.style.width = "90.6%";
password.style.marginBottom = "10px";
password.style.borderRadius = "4px";
password.addEventListener("click", function(event) {
    // event.target.style.backgroundColor = "blue";
})

// create show password
var showPassword = document.createElement("input");
showPassword.setAttribute("type", "checkbox");
form.appendChild(showPassword);
showPassword.style.marginBottom = "30px";
showPassword.addEventListener('change', function(event) {
    if (this.checked) {
        password.setAttribute("type", "text");
    }
    else {
        password.setAttribute("type", "password");
    }
})

var showLabel = document.createElement("label");
showLabel.innerHTML = "पासवर्ड देखाउनुहोस्";
showLabel.style.fontSize = "14px";
form.appendChild(showLabel);

var forgotAndNext = document.createElement("div");
form.appendChild(forgotAndNext);

// create forgot password
var forgotPassword = document.createElement("a");
forgotPassword.innerHTML = "पासवर्ड बिर्सनुभयो?";
forgotAndNext.appendChild(forgotPassword);
forgotPassword.setAttribute("href", "#");
forgotPassword.style.textDecoration = "none";
forgotPassword.style.color = "#1b64da";
forgotPassword.addEventListener('mouseover', function(event) {
    forgotPassword.style.color = "red";
})
forgotPassword.addEventListener('mouseout', function(event) {
    forgotPassword.style.color = "#1b64da";
})
forgotPassword.addEventListener('click', function(event) {
    password.value = "";
})

// create next button
var next = document.createElement("button");
next.innerHTML = "अर्को";
forgotAndNext.appendChild(next);
next.style.float = "right";
next.style.padding = "5px 25px";
next.style.backgroundColor = "#1b64da";
next.style.borderColor = "#1b64da";
next.style.borderRadius = "5px";
next.style.color = "white";
next.addEventListener('mouseover', function(event) {
    next.style.backgroundColor = "#1450b1";
    next.style.borderColor = "#1450b1";
})
next.addEventListener('mouseout', function(event) {
    next.style.backgroundColor = "#1b64da";
})
next.addEventListener('click', function(event) {
    if (password.value != "") {
        if (password.value.length > 8) {
            console.log("successful!");
        }
        else {
            alert("Password should be at least 8 characters long!");
        }
    }
})