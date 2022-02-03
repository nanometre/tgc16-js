const fs = require('fs');
const { title } = require('process');
const prompt = require('prompt-sync')();
let books = []

while (true) {
    answer = prompt('Do you want to enter a book info? ')
    if (answer.toLowerCase() == 'y') {
        isbn = prompt('Enter the ISBN ');
        booktitle = prompt('Enter the title ');
        author = prompt('Enter the author ');
        datePub = prompt('Enter the date of publication ');

        let bookObj = {
            'isbn': isbn,
            'title': booktitle,
            'author': author,
            'datePub': datePub
        }

        books.push(bookObj)

    } else if (answer.toLowerCase() == 'n') {
        break
    }
}

let jsonString = JSON.stringify(books)
fs.writeFileSync("books.json", jsonString)