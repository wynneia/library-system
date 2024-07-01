class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.getISBN() !== isbn);
    }

    listBooks() {
        return this.books.map(book => book.getDescription()).join('\n');
    }

    findBookByTitle(title) {
        return this.books.find(book => book.getTitle().toLowerCase() === title.toLowerCase());
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => book.getAuthor().toLowerCase() === author.toLowerCase());
    }

    sortBooksByTitle() {
        this.books.sort((a, b) => a.getTitle().localeCompare(b.getTitle()));
    }
}

module.exports = Library;
