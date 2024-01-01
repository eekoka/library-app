const myLibrary = [];

function Book(title, author, noPages, read) {
    this.title = title;
    this.author = author;
    this.noPages = noPages;
    this.read = read;

    this.info = function() {
        return title+" by "+author+", "+noPages+" pages, "+read;
    }

}

function addBookToLibrary(title, author, noPages, read) {
   const book = new Book(title, author, noPages, read);
   myLibrary.push(book);
}

addBookToLibrary("The Intelligent Investor", "Benjamin Graham", 640, "Read");
addBookToLibrary("Security Analysis", "Benjamin Graham", 725, "Not Read");
addBookToLibrary("A Random Walk Down Wall Street", "Burton Malkiel", 448, "Not Read");
addBookToLibrary("Common Stocks and Uncommon Profits", "Philip A. Fisher", 320, "Read");
addBookToLibrary("The Little Book of Common Sense Investing", "John C. Bogle", 304, "Not Read");

/*
console.log(myLibrary[3].info());
*/