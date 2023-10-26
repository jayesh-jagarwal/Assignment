

const users = [];

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        alert('Login successful');
    } else {
        alert('Login failed. Please check your credentials.');
    }
}


function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    const userExists = users.some(u => u.email === email);
    if (userExists) {
        alert('User with this email already exists.');
    } else {
        users.push({ email, password });
        alert('Registration successful. You can now login.');
    }
}



