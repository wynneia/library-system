const readline = require('readline');
const EBook = require('./classes/EBook');
const PrintedBook = require('./classes/PrintedBook');
const Library = require('./classes/Library');

const library = new Library();

const ebook1 = new EBook('The Subtle Art of Not Giving a F*ck', 'Mark Manson', '9780062457714', 1.2);
const ebook2 = new EBook('Becoming', 'Michelle Obama', '9780241334140', 3.5);
const printedBook1 = new PrintedBook('Educated', 'Tara Westover', '9780399590504', 0.6);
const printedBook2 = new PrintedBook('Where the Crawdads Sing', 'Delia Owens', '9780735219090', 0.8);
const printedBook3 = new PrintedBook('Becoming', 'Michelle Obama', '9780241334140', 0.9);

library.addBook(ebook1);
library.addBook(ebook2);
library.addBook(printedBook1);
library.addBook(printedBook2);
library.addBook(printedBook3);

console.log('List of Books in the Library:');
console.log(library.listBooks());

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('\nEnter a book title to search: ', (title) => {
    const foundBook = library.findBookByTitle(title);
    if (foundBook) {
        console.log(`\nFound Book: ${foundBook.getDescription()}`);
    } else {
        console.log(`\nBook with title "${title}" not found.`);
    }

    rl.question('\nEnter an author name to search for books: ', (author) => {
        const booksByAuthor = library.findBooksByAuthor(author);
        if (booksByAuthor.length > 0) {
            console.log(`\nBooks by ${author}:`);
            booksByAuthor.forEach(book => console.log(book.getDescription()));
        } else {
            console.log(`\nNo books found by author "${author}".`);
        }

        rl.close();
    });
});
