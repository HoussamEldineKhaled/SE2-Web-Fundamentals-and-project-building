"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    isbn;
    title;
    author;
    pages;
    currentPage;
    constructor(isbn, title, author, pages, currentPage) {
        if (pages < 0) {
            throw new Error("The book should have a positive number of pages");
        }
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.pages = pages;
        if (typeof currentPage === "number") {
            this.currentPage = currentPage;
        }
        else {
            this.currentPage = 0;
        }
    }
    read(pages) {
        if (pages < 0) {
            throw new Error("You're input should be ");
        }
        this.currentPage += pages;
    }
    getProgress() {
        return (this.currentPage / this.pages) * 100;
    }
    isFinished() {
        return this.currentPage === this.pages;
    }
    reset() {
        this.currentPage = 0;
    }
    toString() {
        return `isbn: ${this.isbn}\nBook title:${this.title}\nAuthor:${this.author}\nNumber of pages:${this.pages}`;
    }
}
exports.default = Book;
