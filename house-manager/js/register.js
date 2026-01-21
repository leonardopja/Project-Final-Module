function register() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const regError = document.getElementById('regError');
    const regSuccess = document.getElementById('regSuccess');

    if (!username || !password) {
        regError.textContent = 'Please fill both fields!';
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(u => u.username === username)) {
        regError.textContent = 'Username already exists!';
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    regSuccess.textContent = 'User registered successfully!';
    setTimeout(() => window.location.href = 'index.html', 1000);
}
