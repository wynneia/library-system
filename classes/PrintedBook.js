const Book = require('./Book');

class PrintedBook extends Book {
    constructor(title, author, isbn, weight) {
        super(title, author, isbn);
        this._weight = weight;
    }

    getWeight() {
        return this._weight;
    }

    setWeight(weight) {
        this._weight = weight;
    }

    getDescription() {
        return `${this.getTitle()} by ${this.getAuthor()} (Printed Book, ${this.getWeight()}kg)`;
    }
}

module.exports = PrintedBook;
