const myLibrary = [];
const openModalBtn = document.getElementById('openModalBtn');
const addBookModal = document.getElementById('addBookModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const addBookForm = document.getElementById('addBookForm');
const submitBookBtn = document.getElementById('submitBookBtn');
const cardsContainer = document.querySelector('.cardscontainer');

openModalBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    addBookModal.close();
});

submitBookBtn.addEventListener('click', () => {
    const title = document.getElementsByName('title')[0].value;
    const author = document.getElementsByName('author')[0].value;
    const pages = document.getElementsByName('pages')[0].value;

    if (title && author && pages) {
        addBookToLibrary(title, author, parseInt(pages));
        displayBooks();
        addBookModal.close();
    } else {
        alert("Please fill in all fields.");
    }
});

function addBookToLibrary(title, author, numberOfPages) {
    const newBook = { title, author, numberOfPages };
    myLibrary.push(newBook);
}

function displayBooks() {
    cardsContainer.innerHTML = '';
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h2>Title: ${book.title}</h2>
                          <h2>Author: ${book.author}</h2>
                          <h2>Pages: ${book.numberOfPages}</h2>
                          <button class="deleteBtn" onclick="deleteBook('${book.title}')"></button>`;
        cardsContainer.appendChild(card);
    });
}

function deleteBook(title) {
    const index = myLibrary.findIndex(book => book.title === title);
    myLibrary.splice(index, 1);
    displayBooks();
}

displayBooks();
