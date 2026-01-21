function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        window.location.href = 'main.html';
    } else {
        loginError.textContent = 'Username or password incorrect!';
    }
}
