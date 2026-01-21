House Management System This project is a complete house management application built using HTML, CSS, and vanilla JavaScript. It demonstrates core skills expected from a junior web developer, including authentication, CRUD operations, DOM manipulation, UI structuring, and data persistence using localStorage.

Overview The system allows users to register, log in, add houses, view a catalog of houses, mark favorites, and delete entries. All data is stored locally in the browser using localStorage, making the application fully functional without a backend.

Features Authentication User registration

Login with validation

Session control using localStorage

Automatic redirect for unauthorized access

House Management (CRUD) Add new houses

Display all registered houses in a dynamic table

Mark and unmark houses as favorites

Delete houses

Persistent data storage

User Interface Sidebar navigation

Clean and responsive layout

Centralized forms

Dynamic rendering using JavaScript

Project Structure Código project/ │── index.html Login page │── register.html User registration page │── main.html Add house page │── catalog.html House catalog page │ ├── css/ │ └── style.css Global styles │ ├── js/ │ ├── login.js Login logic │ ├── register.js Registration logic │ ├── main.js Add house logic │ └── catalog.js Listing, favorites, and delete logic │ └── img/ Project images Technologies Used HTML5

CSS3

JavaScript (ES6)

localStorage

Bootstrap Icons

How to Run Clone the repository:

Código git clone https://github.com/your-username/your-repo.git Open the file index.html in your browser.

Register a new user.

Log in and start using the system.

Skills Demonstrated This project highlights several junior-level development skills:

DOM manipulation

Layout structuring and responsive design

File and code organization

Authentication logic

CRUD operations

Data persistence using localStorage

Debugging and problem solving

Future Improvements Filtering by city, price, or AC

Dedicated favorites page

CSV export

Backend implementation with Node.js

Database integration

Author Leonardo Web Developer based in Vancouver, BC Full Stack Web Development student at Greystone College
