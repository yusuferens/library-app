const myLibrary = [];
const openModalBtn = document.getElementById('openModalBtn');
const addBookModal = document.getElementById('addBookModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const addBookForm = document.getElementById('addBookForm');
const sumbitBookBtn = document.getElementById('submitBookBtn')

openModalBtn.addEventListener('click', () => {
    addBookModal.showModal();
});

closeModalBtn.addEventListener('click', () => {
    addBookModal.close();
});


function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary(title, author, numberOfPages) {
    const newBook = new Book(title, author, numberOfPages);
    myLibrary.push(newBook);

}

addBookToLibrary("The book", "Jeff", 199);

console.log(myLibrary);
