document.addEventListener("DOMContentLoaded", () => {
    renderTable();
});

let houses = JSON.parse(localStorage.getItem('houses')) || [];

function renderTable() {
    const tbody = document.querySelector('#houseTable tbody');
    tbody.innerHTML = '';

    houses.forEach((house, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${house.city}</td>
            <td>${house.province}</td>
            <td>${house.ac}</td>
            <td>${house.priceHouse}</td>
            <td>${house.priceRent}</td>
            <td>${house.rooms}</td>
            <td class="${house.favorite ? 'favorite' : ''}">
                ${house.favorite ? '★' : '☆'}
            </td>
            <td>
                <button onclick="toggleFavorite(${index})">
                    ${house.favorite ? 'Unfavorite' : 'Favorite'}
                </button>
                <button onclick="deleteHouse(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function toggleFavorite(index) {
    houses[index].favorite = !houses[index].favorite;
    localStorage.setItem('houses', JSON.stringify(houses));
    renderTable();
}

function deleteHouse(index) {
    if (confirm('Are you sure you want to delete this house?')) {
        houses.splice(index, 1);
        localStorage.setItem('houses', JSON.stringify(houses));
        renderTable();
    }
}
