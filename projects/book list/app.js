//Book Class:Represent Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class:handle UI Tasks
class UI {
    static DisplayBooks() {
        const storedBooks = [{
                title: 'Book One',
                author: 'John Doe',
                isbn: '3434434'
            },
            {
                title: 'Book Two',
                author: 'Jane Doe',
                isbn: '45545'
            }
        ];
        const books = storedBooks;
        books.forEach((Book) => UI.addBookToList(Book));
    }
    static addBookToList(Book) {
        const list = document.querySelector("#book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${Book.title}</td>
        <td>${Book.author}</td>
        <td>${Book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row)
    }
}
//Store Class:Handles Storage

//Event:Display Books
document.addEventListener('DOMContentLoaded', UI.DisplayBooks)
    //Event:Add Books

const form = document.querySelector('#book-form');
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
})
form.addEventListener("submit", function() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    })
    //Event:Remove Books
const list = document.querySelector("#book-list")
list.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
})