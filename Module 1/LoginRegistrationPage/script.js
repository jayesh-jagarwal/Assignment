
const users = [];

//  This funtion will call when when we click on Sign In submit button 
//  After we enter login-email & login-password and if they are match with register-email & register-password 
//  it will show "Login successful" alert .
//  And If login-email & login-password are not same it will show "Invalid username or password. Please try again." alert

function log() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert('Login successful');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

//  This funtion will call when when we click on Register submit button 
//  After we enter register-email & register-password it will show "Registration successful. You can now login." alert
//  If register-email & register-password are blank it will show "Username and password cannot be blank!" alert 
//  If register-email & register-password are already exists the it will show "Username already exists. Please choose another." alert
  
function reg() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const userExists = users.some(u => u.email === email);

    if (email === "" || password === "") {
        alert("Username and password cannot be blank!");
    }
    else if (userExists) {
        alert('Username already exists. Please choose another.');
    } else {
        users.push({ email, password });
        alert('Registration successful. You can now login.');
    }
}




var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

//  This function will call when we click on Sign In button 
//  In this function we are giving some style 
//  when we click Sign In button it will move left side 


function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

//  This function will call when we click on Sign Up button 
//  In this function we are giving some style 
//  when we click Sign Up button it will move right side 


function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

//  This function will make our web page responsive 

function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }