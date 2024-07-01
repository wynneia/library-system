const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, isbn, fileSize) {
        super(title, author, isbn);
        this._fileSize = fileSize;
    }

    getFileSize() {
        return this._fileSize;
    }

    setFileSize(fileSize) {
        this._fileSize = fileSize;
    }

    getDescription() {
        return `${this.getTitle()} by ${this.getAuthor()} (E-Book, ${this.getFileSize()}MB)`;
    }
}

module.exports = EBook;
