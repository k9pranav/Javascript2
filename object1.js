function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return (title + " by " + author + ", " + pages + ", " + read + " yet")
    }
}

const myBook = new Book('Harry Potter', "J.K Rowling" , 455, "not read")

console.log(myBook.info())

