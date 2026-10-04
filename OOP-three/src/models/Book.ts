export default class Book{
    isbn: string
    title: string
    author: string
    pages: number
    currentPage: number

    constructor(isbn: string, title: string, author: string, pages: number)
    constructor(isbn: string, title: string, author: string, pages: number, currentPage: number)

    constructor(isbn: string, title: string, author: string, pages: number, currentPage?: number){
        if(pages < 0){
            throw new Error("The book should have a positive number of pages")
        }

        this.isbn = isbn
        this.title = title
        this.author = author
        this.pages = pages
        if(typeof currentPage === "number"){
            this.currentPage = currentPage
        } else {
            this.currentPage = 0
        }
        
    }

    read(pages: number): void{
        if(pages < 0){
            throw new Error("You're input should be ")
        }

        this.currentPage += pages
    }

    getProgress(): number{
        return (this.currentPage / this.pages) * 100
    }

    isFinished(): boolean{
        return this.currentPage === this.pages
    }

    reset(): void{
        this.currentPage = 0
    }

    toString(): string{
        return `isbn: ${this.isbn}\nBook title:${this.title}\nAuthor:${this.author}\nNumber of pages:${this.pages}`
    }
}

