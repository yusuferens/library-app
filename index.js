const myLibrary = []

function book(title,author,numberOfPages){
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages


}

function addBookToLibrary(title,author,numberOfPages) {
    const newBook = new book(title,author,numberOfPages)

    myLibrary.push(newBook)


}

addBookToLibrary("The book","jeff",199)



console.log(myLibrary)