const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
const greeting = document.getElementById('greeting');

if (!loggedUser) {
    window.location.href = 'index.html';
} else {
    greeting.textContent = `Hello ${loggedUser.username}!`;
}

let houses = JSON.parse(localStorage.getItem('houses')) || [];

function addHouse() {
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const ac = document.getElementById('ac').value;
    const priceHouse = document.getElementById('priceHouse').value;
    const priceRent = document.getElementById('priceRent').value;
    const rooms = document.getElementById('rooms').value;

    if (!city || !province || !ac || !priceHouse || !priceRent || !rooms) {
        alert('Please fill all fields!');
        return;
    }

    houses.push({ city, province, ac, priceHouse, priceRent, rooms, favorite: false });
    localStorage.setItem('houses', JSON.stringify(houses));

    document.getElementById('city').value = '';
    document.getElementById('province').value = '';
    document.getElementById('ac').value = '';
    document.getElementById('priceHouse').value = '';
    document.getElementById('priceRent').value = '';
    document.getElementById('rooms').value = '';
}

function logout() {
    localStorage.removeItem('loggedUser');
    window.location.href = 'index.html';
}
