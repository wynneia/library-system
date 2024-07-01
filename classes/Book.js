class Book {
    constructor(title, author, isbn) {
        this._title = title;
        this._author = author;
        this._isbn = isbn;
    }

    getTitle() {
        return this._title;
    }

    getAuthor() {
        return this._author;
    }

    getISBN() {
        return this._isbn;
    }

    setTitle(title) {
        this._title = title;
    }

    setAuthor(author) {
        this._author = author;
    }

    setISBN(isbn) {
        this._isbn = isbn;
    }

    getDescription() {
        return `${this.getTitle()} by ${this.getAuthor()} (ISBN: ${this.getISBN()})`;
    }
}

module.exports = Book;
